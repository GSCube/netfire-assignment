import React from 'react';
import HeroPlayer from './components/HeroPlayer';
import videoSrc from './assets/video/hero.mp4';

const backupUrl = 'https://www.pexels.com/video/birds-flying-on-the-sky-9206132';

const App = () => {
  return (
    <>
      <header>Header</header>
      <HeroPlayer videoSrc={videoSrc} backupUrl={backupUrl}>
        <h1>Hero Video</h1>
      </HeroPlayer>
    </>
  );
};

export default App;
