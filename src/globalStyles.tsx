import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  body {
    font-family: 'Exo', sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
  
  * {
    box-sizing: border-box;
  }
`;
