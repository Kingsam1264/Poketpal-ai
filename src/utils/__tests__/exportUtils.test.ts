import Share from 'react-native-share';
import * as RNFS from '@dr.pogodin/react-native-fs';
import {Alert, Platform} from 'react-native';

// const mockDocumentPath = '/mock/documents';
// jest.mock('@dr.pogodin/react-native-fs', () => ({
//   DocumentDirectoryPath: '/mock/documents',
// }));

// Mock the androidPermission module
jest.mock('../androidPermission', () => ({
  ensureLegacyStoragePermission: jest.fn().mockResolvedValue(true),
}));
import {
  exportLegacyChatSessions,
  exportChatSession,
  exportAllChatSessions,
  exportPal,
  exportAllPals,
} from '../exportUtils';
import {ensureLegacyStoragePermission} from '../androidPermission';

// Mock dependencies
jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
  Alert: {
    alert: jest.fn(),
  },
}));

// Mock react-native-share
jest.mock('react-native-share', () => ({
  open: jest.fn().mockResolvedValue({success: true}),
}));

jest.mock('@dr.pogodin/react-native-fs', () => ({
  writeFile: jest.fn().mockResolvedValue(undefined),
  readFile: jest.fn().mockResolvedValue('{"legacy":"data"}'),
  exists: jest.fn().mockResolvedValue(true),
  copyFile: jest.fn().mockResolvedValue(undefined),
  DocumentDirectoryPath: '/mock/document/path',
  CachesDirectoryPath: '/mock/cache/path',
  DownloadDirectoryPath: '/mock/download/path',
}));

jest.mock('date-fns', () => ({
  format: jest.fn().mockReturnValue('2024-01-01_12-00-00'),
}));

// Import the actual repository to spy on it
import {chatSessionRepository} from '../../repositories/ChatSessionRepository';
import {
  getAbsoluteThumbnailPath,
  getFullThumbnailUri,
  isLocalThumbnailPath,
  isRemoteThumbnailUrl,
} from '../imageUtils';

jest.mock('../androidPermission', () => ({
  ensureLegacyStoragePermission: jest.fn().mockResolvedValue(true),
}));

// Mock l10n
// jest.mock('../l10n', () => ({
//   l10n: jest.fn(key => key), // Return the key as the translation
// }));

describe('exportUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Reset all RNFS mocks to their default behavior
    (RNFS.exists as jest.Mock).mockResolvedValue(true);
    (RNFS.readFile as jest.Mock).mockResolvedValue('{}');
    (RNFS.writeFile as jest.Mock).mockResolvedValue(undefined);
    (RNFS.copyFile as jest.Mock).mockResolvedValue(undefined);
    (RNFS.DocumentDirectoryPath as string) = '/mock/documents';

    // Reset Share mock
    (Share.open as jest.Mock).mockResolvedValue(undefined);

    // Reset Alert mock
    (Alert.alert as jest.Mock).mockImplementation(() => {});

    // Reset Platform mock to iOS by default
    (Platform as any).OS = 'ios';

    // PermissionsAndroid is handled by individual tests when needed

    // Don't restore all mocks here as it interferes with console.error mocking in error handling tests
  });

  describe('exportLegacyChatSessions', () => {
    it('should export legacy sessions if file exists', async () => {
      // Setup
      (RNFS.exists as jest.Mock).mockResolvedValueOnce(true);
      (RNFS.readFile as jest.Mock).mockResolvedValueOnce('{"sessions": []}');

      // Execute
      await exportLegacyChatSessions();

      // Verify
      expect(RNFS.exists).toHaveBeenCalled();
      expect(RNFS.readFile).toHaveBeenCalled();
      expect(RNFS.writeFile).toHaveBeenCalled();
      expect(Share.open).toHaveBeenCalled();
    });

    it('should throw error if legacy file does not exist', async () => {
      (RNFS.exists as jest.Mock).mockResolvedValueOnce(false);

      await expect(exportLegacyChatSessions()).rejects.toThrow(
        'Legacy chat sessions file not found',
      );
    });

    it('should handle file read errors', async () => {
      (RNFS.exists as jest.Mock).mockResolvedValueOnce(true);
      (RNFS.readFile as jest.Mock).mockRejectedValueOnce(
        new Error('File read failed'),
      );

      await expect(exportLegacyChatSessions()).rejects.toThrow(
        'File read failed',
      );
    });
  });

  describe('exportChatSession', () => {
    const mockSessionData = {
      session: {
        id: 'session-1',
        title: 'Test Session',
        date: '2024-01-01T00:00:00Z',
        activePalId: 'pal-1',
      },
      messages: [
        {
          id: 'msg-1',
          author: 'user',
          text: 'Hello',
          type: 'text',
          metadata: '{"test": true}',
          createdAt: 1704067200000,
        },
      ],
      completionSettings: {
        settings: '{"temperature": 0.7}',
      },
    };

    beforeEach(() => {
      // Override the centralized mock's getSessionById method
      chatSessionRepository.getSessionById = jest
        .fn()
        .mockResolvedValue(mockSessionData as any);
    });

    it('should export single chat session successfully', async () => {
      await exportChatSession('session-1');

      expect(chatSessionRepository.getSessionById).toHaveBeenCalledWith(
        'session-1',
      );
      expect(RNFS.writeFile).toHaveBeenCalled();
      expect(Share.open).toHaveBeenCalled();
    });

    it('should throw error if session not found', async () => {
      (chatSessionRepository.getSessionById as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(exportChatSession('nonexistent')).rejects.toThrow(
        'Session not found',
      );
    });

    it('should handle export errors', async () => {
      (RNFS.writeFile as jest.Mock).mockRejectedValueOnce(
        new Error('Write failed'),
      );

      await expect(exportChatSession('session-1')).rejects.toThrow(
        'Write failed',
      );
    });
  });

  describe('exportAllChatSessions', () => {
    const mockSessions = [
      {id: 'session-1', title: 'Session 1', date: '2024-01-01T00:00:00Z'},
      {id: 'session-2', title: 'Session 2', date: '2024-01-02T00:00:00Z'},
    ];

    const mockSessionData = {
      session: mockSessions[0],
      messages: [],
      completionSettings: null,
    };

    beforeEach(() => {
      // Override the centralized mock methods
      chatSessionRepository.getAllSessions = jest
        .fn()
        .mockResolvedValue(mockSessions as any);
      chatSessionRepository.getSessionById = jest
        .fn()
        .mockResolvedValue(mockSessionData as any);
    });

    it('should export all chat sessions successfully', async () => {
      await exportAllChatSessions();

      expect(chatSessionRepository.getAllSessions).toHaveBeenCalled();
      expect(chatSessionRepository.getSessionById).toHaveBeenCalledTimes(2);
      expect(RNFS.writeFile).toHaveBeenCalled();
      expect(Share.open).toHaveBeenCalled();
    });

    it('should handle empty sessions list', async () => {
      (chatSessionRepository.getAllSessions as jest.Mock).mockResolvedValueOnce(
        [],
      );

      await exportAllChatSessions();

      expect(RNFS.writeFile).toHaveBeenCalled();
      expect(Share.open).toHaveBeenCalled();
    });
  });

  describe('Platform-specific behavior', () => {
    it('should handle iOS file sharing', async () => {
      // iOS is already mocked as default
      await exportChatSession('session-1');

      expect(Share.open).toHaveBeenCalledWith(
        expect.objectContaining({
          url: expect.stringContaining('file://'),
          type: 'application/json',
        }),
      );
    });

    it('should handle Android file sharing with permissions', async () => {
      // Mock Android
      (Platform as any).OS = 'android';
      (ensureLegacyStoragePermission as jest.Mock).mockResolvedValue(true);

      await exportChatSession('session-1');

      expect(ensureLegacyStoragePermission).toHaveBeenCalled();
      expect(RNFS.copyFile).toHaveBeenCalled();
    });

    it('should handle Android permission denial gracefully', async () => {
      (Platform as any).OS = 'android';
      (ensureLegacyStoragePermission as jest.Mock).mockResolvedValue(false);

      await exportChatSession('session-1');

      // Should fall back to direct sharing
      expect(Share.open).toHaveBeenCalled();
    });
  });

  describe('Error handling', () => {
    const mockSessionData = {
      session: {
        id: 'session-1',
        title: 'Test Session',
        date: '2024-01-01T00:00:00Z',
        activePalId: 'pal-1',
      },
      messages: [
        {
          id: 'msg-1',
          author: 'user',
          text: 'Hello',
          type: 'text',
          metadata: '{"test": true}',
          createdAt: 1704067200000,
        },
      ],
      completionSettings: {
        settings: '{"temperature": 0.7}',
      },
    };

    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
      consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      // Set up the chat session repository mock for error handling tests
      chatSessionRepository.getSessionById = jest
        .fn()
        .mockResolvedValue(mockSessionData as any);
    });

    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it('should handle share errors gracefully', async () => {
      (Share.open as jest.Mock).mockRejectedValue(new Error('Share failed'));

      await expect(exportChatSession('session-1')).rejects.toThrow();
      expect(Alert.alert).toHaveBeenCalledWith(
        expect.stringContaining('Export Error'),
        expect.stringContaining('export'),
        expect.any(Array),
      );
    });

    it('should handle file write errors', async () => {
      (RNFS.writeFile as jest.Mock).mockRejectedValue(new Error('Disk full'));

      await expect(exportChatSession('session-1')).rejects.toThrow('Disk full');
      expect(console.error).toHaveBeenCalledWith(
        'Error sharing JSON data:',
        expect.any(Error),
      );
    });

    it('should handle copy file errors on Android gracefully', async () => {
      // Set up Android environment (not API 29) with granted permissions
      (Platform as any).OS = 'android';
      (Platform as any).Version = 28; // Not API 29

      // Mock the androidPermission module to return true (permission granted)
      (ensureLegacyStoragePermission as jest.Mock).mockResolvedValueOnce(true);

      // Mock copyFile to fail
      (RNFS.copyFile as jest.Mock).mockRejectedValue(new Error('Copy failed'));

      // The function should handle the error gracefully, not throw
      await exportChatSession('session-1');

      // Verify that copyFile was attempted
      expect(RNFS.copyFile).toHaveBeenCalled();

      // Verify that Alert.alert was called to show the error to the user
      expect(Alert.alert).toHaveBeenCalledWith(
        expect.any(String), // Save options title
        expect.any(String), // Save options message
        expect.any(Array), // Buttons array
      );
    });
  });

  describe('Pal Export Functions', () => {
    it('exportPal rejects because pal export was removed', async () => {
      await expect(exportPal('pal-1')).rejects.toThrow(
        'Pal export is no longer supported',
      );
    });

    it('exportAllPals rejects because pal export was removed', async () => {
      await expect(exportAllPals()).rejects.toThrow(
        'Pal export is no longer supported',
      );
    });
  });

  describe('isLocalThumbnailPath', () => {
    it('should return true for local filenames', () => {
      expect(isLocalThumbnailPath('test_thumbnail.jpg')).toBe(true);
      expect(isLocalThumbnailPath('pal-123_thumbnail.png')).toBe(true);
    });

    it('should return false for remote URLs', () => {
      expect(isLocalThumbnailPath('https://example.com/image.jpg')).toBe(false);
      expect(isLocalThumbnailPath('http://example.com/image.jpg')).toBe(false);
    });
  });

  describe('isRemoteThumbnailUrl', () => {
    it('should return true for HTTP/HTTPS URLs', () => {
      expect(isRemoteThumbnailUrl('https://example.com/image.jpg')).toBe(true);
      expect(isRemoteThumbnailUrl('http://example.com/image.jpg')).toBe(true);
    });

    it('should return false for non-HTTP URLs', () => {
      expect(isRemoteThumbnailUrl('file:///path/to/image.jpg')).toBe(false);
      expect(isRemoteThumbnailUrl('pal-images/image.jpg')).toBe(false);
      expect(isRemoteThumbnailUrl('/absolute/path/image.jpg')).toBe(false);
    });
  });

  describe('getFullThumbnailUri', () => {
    it('should convert filenames to file:// URIs', () => {
      const filename = 'test_thumbnail.jpg';
      const expected = `file:///mock/document/path/pal-images/test_thumbnail.jpg`;
      expect(getFullThumbnailUri(filename)).toBe(expected);
    });

    it('should return remote URLs as-is', () => {
      const remoteUrl = 'https://example.com/image.jpg';
      expect(getFullThumbnailUri(remoteUrl)).toBe(remoteUrl);
    });
  });

  describe('getAbsoluteThumbnailPath', () => {
    it('should convert filenames to absolute paths', () => {
      const filename = 'test_thumbnail.jpg';
      const expected = `/mock/document/path/pal-images/test_thumbnail.jpg`;
      expect(getAbsoluteThumbnailPath(filename)).toBe(expected);
    });
  });
});
