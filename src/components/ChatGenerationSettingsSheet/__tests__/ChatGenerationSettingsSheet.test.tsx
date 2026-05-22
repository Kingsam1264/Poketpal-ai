import React from 'react';
import {fireEvent, render, act, waitFor} from '../../../../jest/test-utils';
import {Alert} from 'react-native';
import {ChatGenerationSettingsSheet} from '../ChatGenerationSettingsSheet';
import {chatSessionStore, defaultCompletionSettings} from '../../../store';
import {validateCompletionSettings} from '../../../utils/modelSettings';

// Mock modelSettings validation
jest.mock('../../../utils/modelSettings', () => ({
  COMPLETION_PARAMS_METADATA: {
    temperature: {
      validation: {type: 'numeric', min: 0, max: 2, required: true},
    },
  },
  validateCompletionSettings: jest.fn().mockReturnValue({errors: {}}),
}));

// Mock Alert
jest.spyOn(Alert, 'alert');

// Mock the CompletionSettings component
jest.mock('../../CompletionSettings', () => {
  const {View, TouchableOpacity} = require('react-native');
  return {
    CompletionSettings: ({onChange}) => (
      <View testID="completion-settings">
        <TouchableOpacity
          testID="mock-settings-update"
          onPress={() => onChange('temperature', '3.0')} // Value above max of 2
        />
      </View>
    ),
  };
});

// Mock Sheet component
jest.mock('../../Sheet/Sheet', () => {
  const {View, Button} = require('react-native');
  const MockSheet = ({children, isVisible, onClose, title}) => {
    if (!isVisible) {
      return null;
    }
    return (
      <View testID="sheet">
        <View testID="sheet-title">{title}</View>
        <Button title="Close" onPress={onClose} testID="sheet-close-button" />
        {children}
      </View>
    );
  };
  MockSheet.ScrollView = ({children}) => (
    <View testID="sheet-scroll-view">{children}</View>
  );
  MockSheet.Actions = ({children}) => (
    <View testID="sheet-actions">{children}</View>
  );
  return {Sheet: MockSheet};
});

// Mock the stores
jest.mock('../../../store', () => ({
  chatSessionStore: {
    sessions: [
      {
        id: 'test-session',
        settingsSource: 'custom',
        completionSettings: {
          temperature: 1.0,
          top_k: 40,
          top_p: 0.9,
        },
      },
    ],
    activeSessionId: 'test-session',
    newChatCompletionSettings: {
      temperature: 0.8,
      top_k: 50,
      top_p: 0.95,
    },
    getCurrentCompletionSettings: jest.fn().mockResolvedValue({
      temperature: 1.0,
      top_k: 40,
      top_p: 0.9,
    }),
    updateSessionCompletionSettings: jest.fn(),
    setNewChatCompletionSettings: jest.fn(),
  },
  defaultCompletionSettings: {
    temperature: 0.7,
    top_k: 40,
    top_p: 0.9,
  },
}));

describe('ChatGenerationSettingsSheet', () => {
  const defaultProps = {
    isVisible: true,
    onClose: jest.fn(),
  };

  const renderSheet = async (props: typeof defaultProps = defaultProps) => {
    const utils = render(<ChatGenerationSettingsSheet {...props} />);
    if (props.isVisible !== false) {
      await waitFor(() => {
        expect(
          chatSessionStore.getCurrentCompletionSettings,
        ).toHaveBeenCalled();
      });
    }
    return utils;
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (
      chatSessionStore.getCurrentCompletionSettings as jest.Mock
    ).mockResolvedValue({
      temperature: 1.0,
      top_k: 40,
      top_p: 0.9,
    });
    (validateCompletionSettings as jest.Mock).mockReturnValue({errors: {}});
  });

  it('renders correctly when visible', async () => {
    const {getByTestId} = await renderSheet();

    expect(getByTestId('sheet')).toBeTruthy();
    expect(getByTestId('completion-settings')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const {queryByTestId} = render(
      <ChatGenerationSettingsSheet {...defaultProps} isVisible={false} />,
    );

    expect(queryByTestId('sheet')).toBeNull();
  });

  it('loads active session settings when available', async () => {
    const {getByTestId} = await renderSheet();

    expect(getByTestId('completion-settings')).toBeTruthy();
  });

  it('loads new chat settings when no active session', async () => {
    const originalSessions = chatSessionStore.sessions;
    chatSessionStore.sessions = [];

    const {getByTestId} = await renderSheet();

    expect(getByTestId('completion-settings')).toBeTruthy();

    chatSessionStore.sessions = originalSessions;
  });

  it('handles save settings correctly for active session', async () => {
    const {getByText} = await renderSheet();

    await act(async () => {
      fireEvent.press(getByText('Save'));
    });

    expect(chatSessionStore.updateSessionCompletionSettings).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('handles save settings correctly for new chat', async () => {
    // Temporarily modify the mock to simulate no active session
    const originalSessions = chatSessionStore.sessions;
    chatSessionStore.sessions = [];

    const {getByText} = await renderSheet();

    await act(async () => {
      fireEvent.press(getByText('Save Changes'));
    });

    expect(chatSessionStore.setNewChatCompletionSettings).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();

    // Restore the original sessions
    chatSessionStore.sessions = originalSessions;
  });

  it('handles reset settings correctly', async () => {
    const {getByText} = await renderSheet();

    await act(async () => {
      fireEvent.press(getByText('Reset'));
    });

    await act(async () => {
      fireEvent.press(getByText('Reset to System Defaults'));
    });

    // After reset, saving should use default settings
    await act(async () => {
      fireEvent.press(getByText('Save'));
    });

    expect(
      chatSessionStore.updateSessionCompletionSettings,
    ).toHaveBeenCalledWith(defaultCompletionSettings);
  });

  it('validates numeric values before saving', async () => {
    // Mock validation to return an error for this specific test
    (validateCompletionSettings as jest.Mock).mockReturnValueOnce({
      errors: {
        temperature: 'Must be between 0 and 2',
      },
    });

    const {getByTestId, getByText} = await renderSheet();

    // Trigger an invalid update
    await act(async () => {
      fireEvent.press(getByTestId('mock-settings-update')); // This sets temperature to '3.0'
    });

    await act(async () => {
      fireEvent.press(getByText('Save'));
    });

    // Should show alert for invalid value
    expect(Alert.alert).toHaveBeenCalledWith(
      'Invalid Values',
      expect.stringContaining('temperature: Must be between 0 and 2'),
      expect.anything(),
    );
    expect(
      chatSessionStore.updateSessionCompletionSettings,
    ).not.toHaveBeenCalled();
  });
});
