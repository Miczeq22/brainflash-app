import React from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';
import { requestAuthInterceptor } from '@api/interceptors/request-auth.interceptor';
import { refreshTokenInterceptor } from '@api/interceptors/refresh-token.interceptor';

interface FetchClientProviderProps {
  children: React.ReactNode;
}

export const FetchClientProvider = ({ children }: FetchClientProviderProps) => {
  const client = React.useMemo(
    () =>
      createClient({
        requestInterceptors: [requestAuthInterceptor(), refreshTokenInterceptor()],
      }),
    [],
  );

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
