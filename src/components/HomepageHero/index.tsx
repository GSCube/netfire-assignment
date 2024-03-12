import HeroPlayer from '../HeroPlayer';
import videoSrc from '../../assets/video/hero.mp4';
import React from 'react';
import { Heading } from '../Typography';

const backupUrl = 'https://www.pexels.com/video/birds-flying-on-the-sky-9206132';

export const HomepageHero = () => {
  return (
    <HeroPlayer videoSrc={videoSrc} backupUrl={backupUrl}>
      <Heading>Lorem Ipsum Dolor Sit amet</Heading>
      <Heading>Donec cursus ligula diam, nec congue augue ultrices nec.</Heading>
    </HeroPlayer>
  );
};
