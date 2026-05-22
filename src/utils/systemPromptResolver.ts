import type {Model} from './types';

export interface SystemPromptDependencies {
  model?: Model | null;
}

/**
 * Resolves the system prompt from the active model's chat template.
 */
export function resolveSystemPrompt(
  dependencies: SystemPromptDependencies,
): string {
  const {model} = dependencies;

  if (model?.chatTemplate?.systemPrompt) {
    return model.chatTemplate.systemPrompt;
  }

  return '';
}

/**
 * Resolves system prompt and formats it as a system message array.
 */
export function resolveSystemMessages(
  dependencies: SystemPromptDependencies,
): Array<{role: 'system'; content: string}> {
  const systemPrompt = resolveSystemPrompt(dependencies);

  if (!systemPrompt.trim()) {
    return [];
  }

  return [
    {
      role: 'system' as const,
      content: systemPrompt,
    },
  ];
}
