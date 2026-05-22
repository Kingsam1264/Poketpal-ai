/**
 * useDeepLinking Hook
 *
 * Handles deep link navigation from iOS Shortcuts
 * Must be called from a component inside NavigationContainer
 */

import {useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {deepLinkService, DeepLinkParams} from '../services/DeepLinkService';
import {deepLinkStore} from '../store';
import {ROUTES, isBenchmarkRunnerUrl} from '../utils/navigationConstants';

export const useDeepLinking = () => {
  const navigation = useNavigation();

  const handleChatDeepLink = useCallback(
    async (message?: string) => {
      if (message) {
        deepLinkStore.setPendingMessage(message);
      }
      (navigation as any).navigate(ROUTES.CHAT);
    },
    [navigation],
  );

  const handleDeepLink = useCallback(
    async (params: DeepLinkParams) => {
      console.log('Handling deep link:', params);

      if (__E2E__) {
        const {dispatchAutomationDeepLink} = require('../__automation__');
        if (await dispatchAutomationDeepLink(params, navigation)) {
          return;
        }
      }

      if (params.host === 'chat' && params.queryParams) {
        const {message} = params.queryParams;
        await handleChatDeepLink(message);
      }
    },
    [handleChatDeepLink, navigation],
  );

  useEffect(() => {
    if (!__E2E__) {
      return;
    }
    const routeIfBench = (url: string | null) => {
      if (isBenchmarkRunnerUrl(url)) {
        (navigation as any).navigate(ROUTES.BENCHMARK_RUNNER);
      }
    };
    Linking.getInitialURL()
      .then(routeIfBench)
      .catch(() => {});
    let sub: {remove: () => void} | null = null;
    try {
      sub = Linking.addEventListener('url', ({url}) => routeIfBench(url));
    } catch {
      sub = null;
    }
    return () => {
      sub?.remove();
    };
  }, [navigation]);

  useEffect(() => {
    deepLinkService.initialize();
    const removeListener = deepLinkService.addListener(handleDeepLink);
    return () => {
      removeListener();
      deepLinkService.cleanup();
    };
  }, [handleDeepLink]);
};

export const usePendingMessage = () => {
  return {
    pendingMessage: deepLinkStore.pendingMessage,
    clearPendingMessage: () => {
      deepLinkStore.clearPendingMessage();
    },
  };
};
