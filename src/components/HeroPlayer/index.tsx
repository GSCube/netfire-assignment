import React, { useEffect, useRef, useState } from 'react';

import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Stop } from 'assets/icons/stop.svg';
import {
  Overlay,
  PlayButton,
  VideoControlWrapper,
  HeroPlayerWrapper,
  ProgressBarContainer,
  ProgressBar,
  Content,
  Video,
  Time,
} from './styles';
import { formatTime } from './utils';
import { Paragraph } from '../Typography';
import { MaxContainer } from '../Layout';

interface HeroPlayerProps {
  videoSrc: string;
  backupUrl: string;
  children?: React.ReactNode;
}

const HeroPlayer: React.FC<HeroPlayerProps> = ({ videoSrc, children, backupUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<string>('00:00');

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleProgress);

      return () => {
        video.removeEventListener('timeupdate', handleProgress);
      };
    }
  }, []);

  const handlePlayPauseToggle = async () => {
    const video = videoRef.current;

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

  const handleProgress = () => {
    const video = videoRef.current;
    if (video) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);

      setTimeLeft(formatTime(video.duration - video.currentTime));
    }
  };

  const handleScrub = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    offsetX: number,
  ) => {
    const video = videoRef.current;
    const scrubTime = (offsetX / e.currentTarget.offsetWidth) * (video?.duration || 0);
    if (video) {
      video.currentTime = scrubTime;
    }
  };

  return (
    <HeroPlayerWrapper>
      <Video ref={videoRef} controls={false} loop autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        <p>
          Your browser doesn&apos;t support HTML5 video. Here is a{' '}
          <a href={backupUrl}>link to the video</a> instead.
        </p>
      </Video>
      <Overlay>
        <MaxContainer>
          <Content>{children}</Content>
          <VideoControlWrapper>
            <PlayButton onClick={handlePlayPauseToggle}>
              {isPlaying ? <Stop /> : <Play />}
            </PlayButton>
            <ProgressBarContainer onClick={(e) => handleScrub(e, e.nativeEvent.offsetX)}>
              <ProgressBar $progress={progress} />
            </ProgressBarContainer>
            <Time>
              <Paragraph $variant="p2" $weight="bold">
                {timeLeft}
              </Paragraph>
            </Time>
          </VideoControlWrapper>
        </MaxContainer>
      </Overlay>
    </HeroPlayerWrapper>
  );
};

export default HeroPlayer;
