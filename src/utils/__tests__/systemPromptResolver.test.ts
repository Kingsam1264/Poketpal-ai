import {
  resolveSystemPrompt,
  resolveSystemMessages,
} from '../systemPromptResolver';
import type {Model} from '../types';

describe('systemPromptResolver', () => {
  describe('resolveSystemPrompt', () => {
    it('should return model chat template system prompt when available', () => {
      const activeModel: Partial<Model> = {
        chatTemplate: {
          systemPrompt: 'Model default system prompt',
          addGenerationPrompt: false,
          name: '',
          bosToken: '',
          eosToken: '',
          chatTemplate: '',
        },
      };

      const result = resolveSystemPrompt({model: activeModel as Model});

      expect(result).toBe('Model default system prompt');
    });

    it('should return empty string when model is null', () => {
      const result = resolveSystemPrompt({model: null});

      expect(result).toBe('');
    });

    it('should return empty string when model has no chat template', () => {
      const activeModel: Partial<Model> = {
        chatTemplate: undefined,
      };

      const result = resolveSystemPrompt({model: activeModel as Model});

      expect(result).toBe('');
    });
  });

  describe('resolveSystemMessages', () => {
    it('should return system message array when system prompt exists', () => {
      const activeModel: Partial<Model> = {
        chatTemplate: {
          systemPrompt: 'You are a helpful assistant.',
          addGenerationPrompt: false,
          name: '',
          bosToken: '',
          eosToken: '',
          chatTemplate: '',
        },
      };

      const result = resolveSystemMessages({model: activeModel as Model});

      expect(result).toEqual([
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
      ]);
    });

    it('should return empty array when system prompt is empty', () => {
      const result = resolveSystemMessages({
        model: null,
      });

      expect(result).toEqual([]);
    });

    it('should return empty array when system prompt is whitespace only', () => {
      const activeModel: Partial<Model> = {
        chatTemplate: {
          systemPrompt: '   \n\t  ',
          addGenerationPrompt: false,
          name: '',
          bosToken: '',
          eosToken: '',
          chatTemplate: '',
        },
      };

      const result = resolveSystemMessages({model: activeModel as Model});

      expect(result).toEqual([]);
    });
  });
});
