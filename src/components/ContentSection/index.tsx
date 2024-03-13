import React from 'react';
import styled from 'styled-components';
import { MaxContainer } from '../Layout';
import { GradientText, Heading2 } from '../Typography';
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

const ContentSection: React.FC = () => {
  return (
    <>
      <ContentWrapper>
        <MaxContainer>
          <ButtonSecondary>EXAMPLE SECTION</ButtonSecondary>
          <TextWrapper>
            <Heading2>
              Lorem{' '}
              <GradientText>
                ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
              </GradientText>{' '}
              massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales
              eros mollis eget. Morbi vitae libero in nunc sodales.
            </Heading2>
          </TextWrapper>

          <ButtonUnderlined>See more</ButtonUnderlined>
        </MaxContainer>
      </ContentWrapper>
    </>
  );
};

export default ContentSection;
