import {Platform} from 'react-native';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {curriculumService} from '../CurriculumService';

jest.mock('react-native', () => ({
  Platform: {OS: 'android'},
}));

jest.mock('@dr.pogodin/react-native-fs', () => ({
  DocumentDirectoryPath: '/data/user/0/com.pocketpalai/files',
  MainBundlePath: '/bundle',
  exists: jest.fn(),
  readDir: jest.fn(),
  readDirAssets: jest.fn(),
  readFileAssets: jest.fn(),
  writeFile: jest.fn(),
  mkdir: jest.fn(),
  unlink: jest.fn(),
  copyFileAssets: jest.fn(),
  existsAssets: jest.fn(),
  copyFolder: jest.fn(),
}));

describe('CurriculumService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    curriculumService.clearCache();
    (RNFS.mkdir as jest.Mock).mockResolvedValue(undefined);
    (RNFS.writeFile as jest.Mock).mockResolvedValue(undefined);
    (RNFS.unlink as jest.Mock).mockResolvedValue(undefined);
    (RNFS.exists as jest.Mock).mockResolvedValue(false);
    (RNFS.readDir as jest.Mock).mockResolvedValue([]);
    Platform.OS = 'android';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(
    'detects bundled curriculum when Grade folders exist in assets',
    async () => {
      (RNFS.readDirAssets as jest.Mock).mockResolvedValue([
        {name: 'Grade 9', isDirectory: () => true},
        {name: 'README.md', isDirectory: () => false},
      ]);

      await expect(
        curriculumService.bundleHasCurriculumAssets(),
      ).resolves.toBe(true);
      expect(RNFS.readDirAssets).toHaveBeenCalledWith('Input');
    },
    10000,
  );

  it(
    'seeds documents from assets using recursive copy fallback',
    async () => {
      const docInput = '/data/user/0/com.pocketpalai/files/Input';

      (RNFS.readDirAssets as jest.Mock).mockImplementation(
        async (dir: string) => {
          if (dir === 'Input') {
            return [{name: 'Grade 9', isDirectory: () => true}];
          }
          if (dir === 'Input/Grade 9') {
            return [{name: 'Biology', isDirectory: () => true}];
          }
          if (dir === 'Input/Grade 9/Biology') {
            return [{name: 'Unit 1.md', isDirectory: () => false}];
          }
          return [];
        },
      );

      (RNFS.copyFileAssets as jest.Mock).mockResolvedValue(undefined);

      (RNFS.exists as jest.Mock).mockImplementation(async (path: string) => {
        if (path === docInput) {
          return true;
        }
        if (path === `${docInput}/.curriculum_seeded`) {
          return false;
        }
        return path.includes('Grade 9');
      });

      (RNFS.readDir as jest.Mock).mockImplementation(async (path: string) => {
        if (path === docInput) {
          return [
            {
              name: 'Grade 9',
              path: `${docInput}/Grade 9`,
              isDirectory: () => true,
            },
          ];
        }
        return [];
      });

      (RNFS.readFileAssets as jest.Mock).mockResolvedValue('# Unit content');

      await expect(curriculumService.hasCurriculumData()).resolves.toBe(true);
      expect(RNFS.readFileAssets).toHaveBeenCalledWith(
        'Input/Grade 9/Biology/Unit 1.md',
        'utf8',
      );
    },
    10000,
  );

  it(
    'prepareForReload removes seeded documents directory',
    async () => {
      const docInput = '/data/user/0/com.pocketpalai/files/Input';
      (RNFS.exists as jest.Mock).mockResolvedValue(true);
      (RNFS.readDir as jest.Mock).mockResolvedValue([
        {
          name: '.curriculum_seeded',
          path: `${docInput}/.curriculum_seeded`,
          isDirectory: () => false,
        },
        {
          name: 'Grade 9',
          path: `${docInput}/Grade 9`,
          isDirectory: () => true,
        },
      ]);

      await curriculumService.prepareForReload();

      expect(RNFS.unlink).toHaveBeenCalled();
    },
    10000,
  );
});
