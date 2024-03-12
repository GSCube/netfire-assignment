import React, { useEffect, useRef, useState } from 'react';

import { Overlay, Range, VideoControlWrapper, VideoWrapper } from './styles';
import { formatTime } from './utils';

interface HeroPlayerProps {
  videoSrc: string;
  backupUrl: string;
  children?: React.ReactNode;
}

const HeroPlayer: React.FC<HeroPlayerProps> = ({ videoSrc, children, backupUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const scrubTime = (parseFloat(e.target.value) / 100) * (video?.duration || 0);
    if (video) {
      video.currentTime = scrubTime;
    }
  };

  return (
    <VideoWrapper>
      <video ref={videoRef} width="100%" height="100%" controls={false}>
        <source src={videoSrc} type="video/mp4" />
        <p>
          Your browser doesn&apos;t support HTML5 video. Here is a{' '}
          <a href={backupUrl}>link to the video</a> instead.
        </p>
      </video>
      <Overlay>
        {children}
        <VideoControlWrapper>
          <button type="button" onClick={handlePlayPauseToggle}>
            Play
          </button>
          <Range type="range" value={progress} min="0" max="100" onChange={handleScrub} />
          {timeLeft}
        </VideoControlWrapper>
      </Overlay>
    </VideoWrapper>
  );
};

export default HeroPlayer;
