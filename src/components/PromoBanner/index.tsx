import React from 'react';
import styled from 'styled-components';
import { MaxContainer } from '../Layout';
import { AccentBar } from '../AccentBar';

interface BannerProps {
  message: React.ReactNode;
}

const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 20px 0;
  text-align: center;
`;

const PromoBanner: React.FC<BannerProps> = ({ message }) => {
  return (
    <>
      <BannerWrapper>
        <MaxContainer>{message}</MaxContainer>
      </BannerWrapper>
      <AccentBar />
    </>
  );
};

export default PromoBanner;
