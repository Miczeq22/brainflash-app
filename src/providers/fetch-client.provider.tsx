import { useAuthState } from '@hooks/use-auth-state/use-auth-state';
import React from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';
import { requestAuthInterceptor } from '@api/interceptors/request-auth.interceptor';

interface FetchClientProviderProps {
  children: React.ReactNode;
}

export const FetchClientProvider = ({ children }: FetchClientProviderProps) => {
  const {
    state: { accessToken },
  } = useAuthState();

  const client = React.useMemo(
    () =>
      createClient({
        requestInterceptors: [requestAuthInterceptor(accessToken)],
      }),
    [accessToken],
  );

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
