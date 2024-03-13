import styled, { css } from 'styled-components';

type WeightVariant = 'regular' | 'medium' | 'semiBold' | 'bold';

export const GradientText = styled.span`
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Headers
export const Heading1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin: 0;
`;

export const Heading2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin: 0;
`;

// Paragraphs
type ParagraphVariant = 'p' | 'p2';
const paragraphLevel1Styles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.p1};
  margin: 0;
`;

const paragraphLevel2Styles = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.p2};
  font-weight: 400;
  margin: 0;
`;

export const Paragraph = styled.p<{
  $variant?: ParagraphVariant;
  $weight?: WeightVariant;
}>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'p':
        return paragraphLevel1Styles;
      case 'p2':
        return paragraphLevel2Styles;
      default:
        return paragraphLevel1Styles;
    }
  }}

  ${({ $weight }) => {
    switch ($weight) {
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

export const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.promotionHighlight};
`;
