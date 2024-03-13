import styled from 'styled-components';

export const Video = styled.video`
  height: 100%;
  width: 100%;
  display: block;
`;

export const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  padding-bottom: 178px;
  display: flex;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.backgroundOverlay};
`;

// VIDEO CONTROLS
export const VideoControlWrapper = styled.div`
  opacity: 0;
  background: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radius.medium};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: opacity ${({ theme }) => theme.transitionTime} ease-in-out;
`;

export const Content = styled.div`
  max-width: 732px;
  padding-bottom: 56px;
`;

const progressBarHeight = '10px';

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: ${progressBarHeight};
  cursor: pointer;
  position: relative;
  margin: 0 24px 0 30px;
  border-radius: ${progressBarHeight};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundProgressBar};
`;

export const ProgressBar = styled.div<{ $progress: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  width: ${({ $progress }) => `${$progress}%`};
`;

export const PlayButton = styled.button`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.backgroundPlayButton};
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.transparent};
  }
`;

export const HeroPlayerWrapper = styled.div`
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.colors.transparent};
    ${VideoControlWrapper} {
      opacity: 1;
    }
  }
`;

export const Time = styled.div`
  width: 60px;
  flex-shrink: 0;
  text-align: right;
`;
