import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  height: 40px;
  cursor: pointer;
  min-width: 103px;
  padding: 0 24px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border-radius: ${({ theme }) => theme.radius.button};
  border: 1px solid ${({ theme }) => theme.colors.borderButton};
  color: ${({ theme }) => theme.colors.textButton};
  font-size: ${({ theme }) => theme.fontSizes.button};
  transition: background ${({ theme }) => theme.transitionTime} ease;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundPrimaryHover};
  }
`;

export const Button = styled.button<{ $active?: boolean }>`
  ${baseButtonStyles};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.backgroundButtonActive : theme.colors.backgroundPrimary};
  font-weight: ${({ $active, theme }) =>
    $active ? theme.fontWeights.semiBold : theme.fontWeights.regular};
`;

export const ButtonSecondary = styled.button<{ $active?: boolean }>`
  ${baseButtonStyles};
  height: 54px;
  font-size: ${({ theme }) => theme.fontSizes.buttonSmall};
  border-radius: ${({ theme }) => theme.radius.buttonSecondary};
  background: ${({ theme }) => theme.colors.backgroundButtonSecondary};
`;

export const ButtonCTA = styled.button<{ $active?: boolean }>`
  ${baseButtonStyles};
  height: 44px;
  background: ${({ theme }) => theme.colors.backgroundButtonCTA};
  border-radius: ${({ theme }) => theme.radius.buttonCTA};
  border: 1px solid ${({ theme }) => theme.colors.borderButtonCTA};
  color: ${({ theme }) => theme.colors.textButtonCTA};
  font-size: ${({ theme }) => theme.fontSizes.buttonSmall};
`;

export const ButtonUnderlined = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textButton};
  color: ${({ theme }) => theme.colors.textButtonUnderlined};
  font-size: ${({ theme }) => theme.fontSizes.button};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
