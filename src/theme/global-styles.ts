import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.color.white};    
    color: ${({ theme }) => theme.color.fontPrimary};
  }
`;
