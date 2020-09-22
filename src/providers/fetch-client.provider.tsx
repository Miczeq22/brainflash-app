import React from 'react';
import { ClientContextProvider, createClient } from 'react-fetching-library';

interface FetchClientProviderProps {
  children: React.ReactNode;
}

export const FetchClientProvider = ({ children }: FetchClientProviderProps) => {
  const client = createClient();

  return <ClientContextProvider client={client}>{children}</ClientContextProvider>;
};
