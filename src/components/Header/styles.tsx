import styled from 'styled-components';

export const Content = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 18px 0;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

export const OuterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;
