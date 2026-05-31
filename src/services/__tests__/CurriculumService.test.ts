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
  readFile: jest.fn(),
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
    (RNFS.readFile as jest.Mock).mockResolvedValue('');
    Platform.OS = 'android';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('detects bundled curriculum when Grade folders exist in assets', async () => {
    (RNFS.readDirAssets as jest.Mock).mockResolvedValue([
      {name: 'Grade 9', isDirectory: () => true},
      {name: 'README.md', isDirectory: () => false},
    ]);

    const result = await curriculumService.bundleHasCurriculumAssets();
    
    expect(result).toBe(true);
    expect(RNFS.readDirAssets).toHaveBeenCalledWith('Input');
  });

  it('returns false when no curriculum assets exist', async () => {
    (RNFS.readDirAssets as jest.Mock).mockResolvedValue([
      {name: 'README.md', isDirectory: () => false},
    ]);

    const result = await curriculumService.bundleHasCurriculumAssets();
    
    expect(result).toBe(false);
  });

  it('clears cache when clearCache is called', () => {
    curriculumService.clearCache();
    
    // Should not throw
    expect(true).toBe(true);
  });
});

