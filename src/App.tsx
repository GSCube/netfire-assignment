import React, { useEffect, useRef, useState } from 'react';

import video from './assets/video/hero.mp4';
import styled from 'styled-components';

const backupUrl = 'https://www.pexels.com/video/birds-flying-on-the-sky-9206132';

const VideoControlWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 800px;
`;

const Range = styled.input`
  -webkit-appearance: none;
  width: 100%;
  margin: 0 20px;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: blue;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: red;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
`;

const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<string>('00:00');

  const togglePlayPause = async () => {
    const video = videoRef.current;

    console.log(video);
    if (!video) {
      return;
    }

    if (!isPlaying) {
      await video.play().then(() => {
        setIsPlaying(true);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleProgress);

      return () => {
        video.removeEventListener('timeupdate', handleProgress);
      };
    }
  }, []);

  const handleProgress = () => {
    const video = videoRef.current;
    if (video) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);

      const timeLeftInSeconds = video.duration - video.currentTime;
      const minutes = Math.floor(timeLeftInSeconds / 60);
      const seconds = Math.floor(timeLeftInSeconds % 60);
      setTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }
  };

  const scrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const scrubTime = (parseFloat(e.target.value) / 100) * (video?.duration || 0);
    if (video) {
      video.currentTime = scrubTime;
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <VideoWrapper>
        <video ref={videoRef} width="100%" height="100%" controls={false}>
          <source src={video} type="video/mp4" />
          <p>
            Your browser doesn&apos;t support HTML5 video. Here is a{' '}
            <a href={backupUrl}>link to the video</a> instead.
          </p>
        </video>
        <HeroSection>
          <VideoControlWrapper>
            <button type="button" onClick={togglePlayPause}>
              Play
            </button>
            <Range type="range" value={progress} min="0" max="100" onChange={scrub} />
            {timeLeft}
          </VideoControlWrapper>
        </HeroSection>
      </VideoWrapper>
    </div>
  );
};

export default App;
