import styled from 'styled-components';
import { Paragraph } from '../Typography';

export const OuterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  padding: 24px 0;
  gap: 60px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textFooterContent};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const Highlight = styled.span`
  font-weight: 700;
`;

export const BrandName = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.textBrandName};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  font-size: 24px;
`;

export const Disclaimer = styled(Paragraph)`
  font-size: 11px;
`;
