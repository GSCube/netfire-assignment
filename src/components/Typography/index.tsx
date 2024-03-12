import styled, { css } from 'styled-components';

// Paragraphs
const paragraphLevel1Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const paragraphLevel2Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const Paragraph = styled.p<{ variant?: 'p' | 'p2' }>`
  ${({ variant }) => {
    switch (variant) {
      case 'p':
        return paragraphLevel1Styles;
      case 'p2':
        return paragraphLevel2Styles;
      default:
        return paragraphLevel1Styles;
    }
  }}
`;

// Headers
const h1Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const h2Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const h3Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

const h4Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

type variant = 'h1' | 'h2' | 'h3' | 'h4';

export const Heading = styled.h1<{ variant?: variant }>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return h1Styles;
      case 'h2':
        return h2Styles;
      case 'h3':
        return h3Styles;
      case 'h4':
        return h4Styles;
      default:
        return h1Styles;
    }
  }}
`;
