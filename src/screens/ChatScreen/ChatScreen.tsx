import React, {useRef, ReactNode, useState} from 'react';

import {observer} from 'mobx-react';

import {
  Bubble,
  ChatView,
  ErrorSnackbar,
  ModelErrorReportSheet,
} from '../../components';

import {useChatSession} from '../../hooks';
import {usePendingMessage} from '../../hooks/useDeepLinking';

import {modelStore, chatSessionStore, uiStore} from '../../store';

import {L10nContext} from '../../utils';
import {MessageType} from '../../utils/types';
import {ErrorState} from '../../utils/errors';
import {user, assistant} from '../../utils/chat';

const renderBubble = ({
  child,
  message,
  nextMessageInGroup,
  scale,
}: {
  child: ReactNode;
  message: MessageType.Any;
  nextMessageInGroup: boolean;
  scale?: any;
}) => (
  <Bubble
    child={child}
    message={message}
    nextMessageInGroup={nextMessageInGroup}
    scale={scale}
  />
);

export const ChatScreen: React.FC = observer(() => {
  const currentMessageInfo = useRef<{
    createdAt: number;
    id: string;
    sessionId: string;
  } | null>(null);
  const l10n = React.useContext(L10nContext);

  const [isErrorReportVisible, setIsErrorReportVisible] = useState(false);
  const [errorToReport, setErrorToReport] = useState<ErrorState | null>(null);

  const {handleSendPress, handleStopPress, isMultimodalEnabled} =
    useChatSession(currentMessageInfo, user, assistant);

  const {pendingMessage, clearPendingMessage} = usePendingMessage();

  const handleReportModelError = React.useCallback(() => {
    if (modelStore.modelLoadError) {
      setErrorToReport(modelStore.modelLoadError);
      setIsErrorReportVisible(true);
      modelStore.clearModelLoadError();
    }
  }, []);

  const handleCloseErrorReport = React.useCallback(() => {
    setIsErrorReportVisible(false);
    setErrorToReport(null);
  }, []);

  const [multimodalEnabled, setMultimodalEnabled] = React.useState(false);

  React.useEffect(() => {
    const checkMultimodal = async () => {
      const enabled = await isMultimodalEnabled();
      setMultimodalEnabled(enabled);
    };

    checkMultimodal();
  }, [isMultimodalEnabled]);

  const thinkingSupported = modelStore.activeModel?.supportsThinking ?? false;

  const [thinkingEnabled, setThinkingEnabled] = useState(true);
  const activeSession = chatSessionStore.sessions.find(
    s => s.id === chatSessionStore.activeSessionId,
  );
  React.useEffect(() => {
    let cancelled = false;
    chatSessionStore.getCurrentCompletionSettings().then(settings => {
      if (!cancelled) {
        setThinkingEnabled(settings.enable_thinking ?? true);
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    chatSessionStore.activeSessionId,
    activeSession?.settingsSource,
    activeSession?.completionSettings,
    chatSessionStore.newChatCompletionSettings,
  ]);

  const isThinking = modelStore.inferencing && !modelStore.isStreaming;

  const handleThinkingToggle = async (enabled: boolean) => {
    const currentSession = chatSessionStore.sessions.find(
      s => s.id === chatSessionStore.activeSessionId,
    );

    if (currentSession) {
      const resolvedSettings =
        await chatSessionStore.getCurrentCompletionSettings();
      const updatedSettings = {
        ...resolvedSettings,
        enable_thinking: enabled,
      };
      await chatSessionStore.updateSessionCompletionSettings(updatedSettings);
    } else {
      const updatedSettings = {
        ...chatSessionStore.newChatCompletionSettings,
        enable_thinking: enabled,
      };
      await chatSessionStore.setNewChatCompletionSettings(updatedSettings);
    }
  };

  return (
    <>
      <ChatView
        renderBubble={renderBubble}
        messages={chatSessionStore.currentSessionMessages}
        onSendPress={handleSendPress}
        onStopPress={handleStopPress}
        user={user}
        isStopVisible={modelStore.inferencing}
        isThinking={isThinking}
        isStreaming={modelStore.isStreaming}
        sendButtonVisibilityMode="always"
        showImageUpload={true}
        isVisionEnabled={multimodalEnabled}
        initialInputText={pendingMessage || undefined}
        onInitialTextConsumed={clearPendingMessage}
        inputProps={{
          showThinkingToggle: thinkingSupported,
          isThinkingEnabled: thinkingEnabled,
          onThinkingToggle: handleThinkingToggle,
        }}
        textInputProps={{
          placeholder: !modelStore.engine
            ? modelStore.isContextLoading
              ? l10n.chat.loadingModel
              : l10n.chat.modelNotLoaded
            : l10n.chat.typeYourMessage,
        }}
      />
      {uiStore.chatWarning && (
        <ErrorSnackbar
          error={uiStore.chatWarning}
          onDismiss={() => uiStore.clearChatWarning()}
        />
      )}
      {modelStore.modelLoadError && (
        <ErrorSnackbar
          error={modelStore.modelLoadError}
          onDismiss={() => modelStore.clearModelLoadError()}
          onReport={handleReportModelError}
        />
      )}
      <ModelErrorReportSheet
        isVisible={isErrorReportVisible}
        onClose={handleCloseErrorReport}
        error={errorToReport}
      />
    </>
  );
});
