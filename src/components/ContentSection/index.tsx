import React from 'react';
import styled from 'styled-components';
import { MaxContainer } from '../Layout';
import { GradientText, Heading } from '../Typography';
import { ButtonSecondary, ButtonUnderlined } from '../Buttons';

const ContentWrapper = styled.div`
  padding: 62px 0 72px;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

const ButtonWrapper = styled.div`
  margin-bottom: 28px;
`;

const StyledHeading = styled(Heading)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ContentSection: React.FC = () => {
  return (
    <>
      <ContentWrapper>
        <MaxContainer>
          <ButtonWrapper>
            <ButtonSecondary>EXAMPLE SECTION</ButtonSecondary>
          </ButtonWrapper>
          <StyledHeading variant={'h2'}>
            Lorem{' '}
            <GradientText>
              ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
            </GradientText>{' '}
            massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros
            mollis eget. Morbi vitae libero in nunc sodales.
          </StyledHeading>
          <ButtonUnderlined>See more</ButtonUnderlined>
        </MaxContainer>
      </ContentWrapper>
    </>
  );
};

export default ContentSection;