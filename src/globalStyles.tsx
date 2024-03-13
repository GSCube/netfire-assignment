import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight:  ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text};
  }
  
  * {
    box-sizing: border-box;
  }
`;
