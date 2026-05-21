/**
 * Hook for handling curriculum-based chat
 * This integrates the selected grade/subject/unit content into the chat system
 */

import {useCallback} from 'react';
import {runInAction} from 'mobx';

import {chatSessionStore, curriculumStore, modelStore, uiStore} from '../store';
import {createMultimodalWarning} from '../utils/errors';

const NEW_SESSION_TITLE = 'New Session';

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

    if (!modelStore.activeModel) {
      runInAction(() => {
        uiStore.setChatWarning(
          createMultimodalWarning(
            'Please load a model first before starting a curriculum chat.',
          ),
        );
      });
      return null;
    }

    try {
      await chatSessionStore.createNewSession(NEW_SESSION_TITLE);

      const sessionId = chatSessionStore.activeSessionId;
      if (!sessionId) {
        return null;
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
