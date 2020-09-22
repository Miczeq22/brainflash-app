import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth.provider';
import { FetchClientProvider } from './fetch-client.provider';
import { ThemeProvider } from './theme.provider';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <FetchClientProvider>{children}</FetchClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </Router>
);
