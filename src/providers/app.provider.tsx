import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth.provider';
import { FetchClientProvider } from './fetch-client.provider';
import { LocaleProvider } from './locale.provider';
import { ThemeProvider } from './theme.provider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@graphql/apollo-client';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <Router>
    <LocaleProvider>
      <ThemeProvider>
        <ApolloProvider client={apolloClient}>
          <AuthProvider>
            <FetchClientProvider>{children}</FetchClientProvider>
          </AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </LocaleProvider>
  </Router>
);
