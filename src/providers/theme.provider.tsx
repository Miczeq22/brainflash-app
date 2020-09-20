import { GlobalStyles } from '@theme/global-styles';
import { ResetStyles } from '@theme/reset-styles';
import { theme } from '@theme/theme-config';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);
