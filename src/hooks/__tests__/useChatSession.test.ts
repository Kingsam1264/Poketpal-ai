import {LlamaContext} from 'llama.rn';
import {renderHook, act, waitFor} from '@testing-library/react-native';

import {textMessage} from '../../../jest/fixtures';
import {sessionFixtures} from '../../../jest/fixtures/chatSessions';
import {
  mockBasicModel,
  mockDefaultCompletionParams,
  mockLlamaContextParams,
  modelsList,
} from '../../../jest/fixtures/models';

import {useChatSession} from '../useChatSession';

import {
  chatSessionStore,
  curriculumStore,
  modelStore,
  ttsStore,
} from '../../store';

import {l10n} from '../../locales';
import {assistant} from '../../utils/chat';

const mockAssistant = {
  id: 'h3o3lc5xj',
};

beforeEach(() => {
  // Reset jest mocks' call counts without removing spies
  jest.clearAllMocks();

  // Reset mock stores to a known baseline between tests
  chatSessionStore.sessions = sessionFixtures as any;
  chatSessionStore.activeSessionId = 'session-1';
  curriculumStore.isActive = false;

  // Reset model state
  modelStore.models = modelsList as any;
  modelStore.activeModelId = undefined;

  // Fresh mocked context each test
  modelStore.context = new LlamaContext(mockLlamaContextParams);

  // Set up a mock engine that delegates to context.completion
  modelStore.engine = {
    completion: jest.fn((params, onData) => {
      return modelStore.context!.completion(params, onData);
    }),
    stopCompletion: jest.fn(async () => {
      await modelStore.context?.stopCompletion();
    }),
  };
});

// Mock the applyChatTemplate function from utils/chat
const applyChatTemplateSpy = jest
  .spyOn(require('../../utils/chat'), 'applyChatTemplate')
  .mockImplementation(async () => 'mocked prompt');

describe('useChatSession', () => {
  beforeEach(() => {
    applyChatTemplateSpy.mockClear();
  });

  it('should send a message and update the chat session', async () => {
    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    await act(async () => {
      await result.current.handleSendPress(textMessage);
    });

    expect(chatSessionStore.addMessageToCurrentSession).toHaveBeenCalled();
    expect(modelStore.context?.completion).toHaveBeenCalled();
  });

  it('should handle model not loaded scenario', async () => {
    modelStore.context = undefined;
    modelStore.engine = undefined;
    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, assistant),
    );

    await act(async () => {
      await result.current.handleSendPress(textMessage);
    });

    // TODO: fix this test:         "text": "Model not loaded. Please initialize the model.",
    expect(chatSessionStore.addMessageToCurrentSession).toHaveBeenCalledWith({
      author: assistant,
      createdAt: expect.any(Number),
      id: expect.any(String),
      text: l10n.en.chat.modelNotLoaded,
      type: 'text',
      metadata: {system: true},
    });
  });

  it('should handle general errors during completion', async () => {
    const errorMessage = 'Some general error';
    if (modelStore.context) {
      modelStore.context.completion = jest
        .fn()
        .mockRejectedValueOnce(new Error(errorMessage));
    }

    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    await act(async () => {
      await result.current.handleSendPress(textMessage);
    });

    expect(chatSessionStore.addMessageToCurrentSession).toHaveBeenCalledWith(
      expect.objectContaining({
        text: `Completion failed: ${errorMessage}`,
        author: assistant,
      }),
    );
  });

  it('should reset the conversation', () => {
    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    result.current.handleResetConversation();

    expect(chatSessionStore.addMessageToCurrentSession).toHaveBeenCalledWith(
      expect.objectContaining({
        text: l10n.en.chat.conversationReset,
        author: assistant,
      }),
    );
  });

  it('should not stop completion when inferencing is false', () => {
    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    result.current.handleStopPress();

    expect(modelStore.context?.stopCompletion).not.toHaveBeenCalled();
  });

  it('should set inferencing correctly during send', async () => {
    let resolveCompletion: (value: any) => void;
    const completionPromise = new Promise(resolve => {
      resolveCompletion = resolve;
    });

    if (modelStore.context) {
      modelStore.context.completion = jest
        .fn()
        .mockImplementation(() => completionPromise);
    }

    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    const sendPromise = result.current.handleSendPress(textMessage);

    // Wait until inferencing flips to true (handleSendPress sets it after adding message)
    await waitFor(() => {
      expect(modelStore.inferencing).toBe(true);
    });

    // Complete the mocked completion and wait for the handler to finish
    resolveCompletion!({timings: {total: 100}, usage: {}});
    await act(async () => {
      await sendPromise;
    });
    expect(modelStore.inferencing).toBe(false);
  });

  test.each([
    {systemPrompt: undefined, shouldInclude: false, description: 'undefined'},
    {systemPrompt: '', shouldInclude: false, description: 'empty string'},
    {systemPrompt: '   ', shouldInclude: false, description: 'whitespace-only'},
    {
      systemPrompt: 'You are a helpful assistant',
      shouldInclude: true,
      description: 'valid prompt',
    },
    {
      systemPrompt: '  Trimmed prompt  ',
      shouldInclude: true,
      description: 'prompt with whitespace',
    },
  ])(
    'should handle system prompt for $description',
    async ({systemPrompt, shouldInclude}) => {
      const testModel = {
        ...mockBasicModel,
        id: 'test-model',
        chatTemplate: {...mockBasicModel.chatTemplate, systemPrompt},
      };

      modelStore.models = [testModel];
      modelStore.setActiveModel(testModel.id);

      // Mock the completion function to capture the messages passed to it
      let capturedMessages: any[] = [];
      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation((params, _onData) => {
            capturedMessages = params.messages || [];
            return Promise.resolve({timings: {total: 100}, usage: {}});
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      if (shouldInclude && systemPrompt?.trim()) {
        // Check that a system message was included in the messages passed to completion
        expect(capturedMessages.some(msg => msg.role === 'system')).toBe(true);
        const systemMessage = capturedMessages.find(
          msg => msg.role === 'system',
        );
        expect(systemMessage.content).toBe(systemPrompt);
      } else {
        // Check that no system message was included
        expect(capturedMessages.some(msg => msg.role === 'system')).toBe(false);
      }
    },
  );

  it('should save completionResult with reasoning_content after completion', async () => {
    const mockReasoningContent = 'Let me think step by step...';
    const mockContent = 'The answer is 42.';

    if (modelStore.context) {
      modelStore.context.completion = jest
        .fn()
        .mockImplementation((_params, onData) => {
          // Simulate streaming with reasoning content
          onData({
            token: 'tok',
            content: mockContent,
            reasoning_content: mockReasoningContent,
          });
          return Promise.resolve({
            text: mockContent,
            reasoning_content: mockReasoningContent,
            timings: {total: 100},
            usage: {},
          });
        });
    }

    const {result} = renderHook(() =>
      useChatSession({current: null}, textMessage.author, mockAssistant),
    );

    await act(async () => {
      await result.current.handleSendPress(textMessage);
    });

    // Verify the final updateMessage call includes completionResult
    expect(chatSessionStore.updateMessage).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        metadata: expect.objectContaining({
          completionResult: {
            reasoning_content: mockReasoningContent,
            content: mockContent,
          },
        }),
      }),
    );
  });

  describe('TTS streaming wiring', () => {
    it('fires onAssistantMessageStart on first token and onAssistantMessageChunk per delta', async () => {
      const finalText = 'Hello world.';

      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation(async (_params, onData) => {
            if (onData) {
              // First chunk — should trigger start + first chunk
              onData({token: 'tok', content: 'Hello '});
              // Second chunk — cumulative content; delta is "world."
              onData({token: 'tok', content: 'Hello world.'});
            }
            return {
              timings: {total: 100},
              usage: {},
              text: finalText,
              content: finalText,
              reasoning_content: '',
            };
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      expect(ttsStore.onAssistantMessageStart).toHaveBeenCalledTimes(1);
      expect(ttsStore.onAssistantMessageChunk).toHaveBeenNthCalledWith(
        1,
        expect.any(String),
        'Hello ',
        undefined,
      );
      expect(ttsStore.onAssistantMessageChunk).toHaveBeenNthCalledWith(
        2,
        expect.any(String),
        'world.',
        undefined,
      );
    });

    it('Case A: forwards reasoning_content deltas and hadReasoning on complete', async () => {
      const finalText = 'Final answer.';

      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation(async (_params, onData) => {
            if (onData) {
              // Reasoning-only chunks (model thinking).
              onData({token: 'tok', content: '', reasoning_content: 'Let me '});
              onData({
                token: 'tok',
                content: '',
                reasoning_content: 'Let me think.',
              });
              // Real content begins.
              onData({
                token: 'tok',
                content: 'Final answer.',
                reasoning_content: 'Let me think.',
              });
            }
            return {
              timings: {total: 100},
              usage: {},
              text: finalText,
              content: finalText,
              reasoning_content: 'Let me think.',
            };
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      // Reasoning deltas arrive as the 3rd arg with empty content delta.
      expect(ttsStore.onAssistantMessageChunk).toHaveBeenNthCalledWith(
        1,
        expect.any(String),
        '',
        'Let me ',
      );
      expect(ttsStore.onAssistantMessageChunk).toHaveBeenNthCalledWith(
        2,
        expect.any(String),
        '',
        'think.',
      );
      expect(ttsStore.onAssistantMessageChunk).toHaveBeenNthCalledWith(
        3,
        expect.any(String),
        'Final answer.',
        undefined,
      );
      expect(ttsStore.onAssistantMessageComplete).toHaveBeenCalledWith(
        expect.any(String),
        finalText,
        {hadReasoning: true},
      );
    });

    it('fires ttsStore.onAssistantMessageComplete exactly once after completion', async () => {
      const finalText = 'the-final-text';

      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation(async (_params, onData) => {
            if (onData) {
              onData({token: 'partial', content: finalText});
            }
            return {
              timings: {total: 100},
              usage: {},
              text: finalText,
              content: finalText,
              reasoning_content: '',
            };
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      expect(ttsStore.onAssistantMessageComplete).toHaveBeenCalledTimes(1);
      expect(ttsStore.onAssistantMessageComplete).toHaveBeenCalledWith(
        expect.any(String),
        finalText,
        {hadReasoning: false},
      );
    });

    it('a throwing onAssistantMessageStart/Chunk does NOT kill the completion stream', async () => {
      const finalText = 'All good, final text.';

      (ttsStore.onAssistantMessageStart as jest.Mock).mockImplementationOnce(
        () => {
          throw new Error('tts start boom');
        },
      );
      (ttsStore.onAssistantMessageChunk as jest.Mock).mockImplementation(() => {
        throw new Error('tts chunk boom');
      });

      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation(async (_params, onData) => {
            if (onData) {
              onData({token: 'tok', content: 'All good, '});
              onData({token: 'tok', content: finalText});
            }
            return {
              timings: {total: 100},
              usage: {},
              text: finalText,
              content: finalText,
              reasoning_content: '',
            };
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      // No throw expected — try/catch wraps the TTS hooks.
      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      // Stream completed normally despite the TTS exceptions.
      expect(modelStore.context?.completion).toHaveBeenCalled();
      expect(ttsStore.onAssistantMessageComplete).toHaveBeenCalledWith(
        expect.any(String),
        finalText,
        {hadReasoning: false},
      );
    });

    it('a throwing onAssistantMessageComplete does NOT bubble out of handleSendPress', async () => {
      const finalText = 'done';

      (ttsStore.onAssistantMessageComplete as jest.Mock).mockImplementationOnce(
        () => {
          throw new Error('tts complete boom');
        },
      );

      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockImplementation(async (_params, onData) => {
            if (onData) {
              onData({token: 'tok', content: finalText});
            }
            return {
              timings: {total: 100},
              usage: {},
              text: finalText,
              content: finalText,
              reasoning_content: '',
            };
          });
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await expect(
        act(async () => {
          await result.current.handleSendPress(textMessage);
        }),
      ).resolves.not.toThrow();
    });

    it('does NOT fire onAssistantMessageComplete on error paths', async () => {
      if (modelStore.context) {
        modelStore.context.completion = jest
          .fn()
          .mockRejectedValueOnce(new Error('boom'));
      }

      const {result} = renderHook(() =>
        useChatSession({current: null}, textMessage.author, mockAssistant),
      );

      await act(async () => {
        await result.current.handleSendPress(textMessage);
      });

      expect(ttsStore.onAssistantMessageComplete).not.toHaveBeenCalled();
    });
  });
});
