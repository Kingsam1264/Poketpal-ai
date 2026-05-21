/**
 * Hook for handling curriculum-based chat
 * This integrates the selected grade/subject/unit content into the chat system
 */

import {useCallback} from 'react';
import {chatSessionStore, curriculumStore, modelStore, uiStore} from '../store';
import {runInAction} from 'mobx';

export const useCurriculumChat = () => {
  /**
   * Initialize a new chat session with curriculum context
   */
  const startCurriculumChat = useCallback(async () => {
    if (!curriculumStore.hasFullSelection) {
      console.warn('Cannot start curriculum chat: missing selection');
      return null;
    }

    const contextPrompt = curriculumStore.getContextPrompt();
    if (!contextPrompt) {
      console.warn('Cannot start curriculum chat: no context prompt');
      return null;
    }

    // Check if model is loaded
    if (!modelStore.isModelLoaded) {
      runInAction(() => {
        uiStore.setChatWarning(
          'Please load a model first before starting a curriculum chat.',
        );
      });
      return null;
    }

    try {
      // Create a new session
      const sessionId = await chatSessionStore.createNewSession();

      // Get the session and update it with curriculum context
      const session = chatSessionStore.sessions.find(s => s.id === sessionId);
      if (session) {
        // The curriculum context will be added as the first user message
        // and the system prompt will be prepended with curriculum context
        // This is handled in useChatSession
      }

      return sessionId;
    } catch (error) {
      console.error('Failed to start curriculum chat:', error);
      return null;
    }
  }, []);

  /**
   * Get the curriculum context to include in messages
   */
  const getCurriculumContext = useCallback((): string => {
    if (!curriculumStore.hasFullSelection) {
      return '';
    }
    return curriculumStore.getContextPrompt();
  }, []);

  /**
   * Check if curriculum is ready for chat
   */
  const isReadyForChat = useCallback((): boolean => {
    return (
      curriculumStore.hasFullSelection &&
      curriculumStore.currentUnitContent.length > 0
    );
  }, []);

  /**
   * Clear curriculum selection after chat ends
   */
  const clearCurriculumSelection = useCallback(() => {
    curriculumStore.clearSelection();
  }, []);

  return {
    startCurriculumChat,
    getCurriculumContext,
    isReadyForChat,
    clearCurriculumSelection,
    curriculumStore,
  };
};
