import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MaxContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sizes.containerPadding};
`;

export const MainContentContainer = styled.div`
  flex-grow: 1;
`;
