import styled, { css } from 'styled-components';

type WeightVariant = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

// Paragraphs
type ParagraphVariant = 'p' | 'p2';
const paragraphLevel1Styles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0;
`;

const paragraphLevel2Styles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  margin: 0;
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p<{ variant?: ParagraphVariant; weight?: WeightVariant }>`
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

  ${({ weight }) => {
    switch (weight) {
      case 'light':
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.light};
        `;
      case 'regular':
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        `;
      case 'medium':
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.medium};
        `;
      case 'semiBold':
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        `;
      case 'bold':
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.bold};
        `;
      default:
        return css`
          font-weight: ${({ theme }) => theme.fontWeights.regular};
        `;
    }
  }}
`;

// Headers
type HeadersVariant = 'h1' | 'h2' | 'h3' | 'h4';

const h1Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin: 0;
`;

const h2Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
`;

const h3Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0;
`;

const h4Styles = css`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
`;

export const Heading = styled.h1<{ variant?: HeadersVariant }>`
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
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
