import React from 'react';
import styled from 'styled-components';
import { MaxContainer } from '../Layout';
import { ButtonSecondary, ButtonUnderlined } from '../Buttons';

const ContentWrapper = styled.div`
  padding: 62px 0 72px;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

const TextWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 45px;
`;

interface ContentSectionProps {
  text: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ text }) => {
  return (
    <>
      <ContentWrapper>
        <MaxContainer>
          <ButtonSecondary>EXAMPLE SECTION</ButtonSecondary>
          <TextWrapper>{text}</TextWrapper>

          <ButtonUnderlined>See more</ButtonUnderlined>
        </MaxContainer>
      </ContentWrapper>
    </>
  );
};

export default ContentSection;
