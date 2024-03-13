import HeroPlayer from '../HeroPlayer';
import videoSrc from 'assets/video/hero.mp4';
import React from 'react';
import { GradientText, Heading1 } from '../Typography';
import styled from 'styled-components';
import { ButtonCTA } from '../Buttons';

const backupUrl = 'https://www.pexels.com/video/birds-flying-on-the-sky-9206132';

const ButtonWrapper = styled.div`
  margin-bottom: 40px;
`;

const Heading = styled(Heading1)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomepageHero = () => {
  return (
    <HeroPlayer videoSrc={videoSrc} backupUrl={backupUrl}>
      <ButtonWrapper>
        <ButtonCTA>LOREM IPSUM</ButtonCTA>
      </ButtonWrapper>
      <Heading>
        <GradientText>Lorem Ipsum Dolor Sit amet</GradientText>
      </Heading>
      <Heading>Donec cursus ligula diam, nec congue augue ultrices nec.</Heading>
    </HeroPlayer>
  );
};
