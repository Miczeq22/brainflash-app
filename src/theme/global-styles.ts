import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) =>
      `${theme.fontFamily.primary}, ${theme.fontFamily.secondary}, sans-serif`};
    background-color: ${({ theme }) => theme.color.white};    
    color: ${({ theme }) => theme.color.fontPrimary};
  }
`;
