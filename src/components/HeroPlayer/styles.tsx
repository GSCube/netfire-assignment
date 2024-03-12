import styled from 'styled-components';

export const VideoControlWrapper = styled.div`
  background: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radius.medium};
  margin: 0 auto;
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Overlay = styled.section`
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

export const Range = styled.input`
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

export const PlayButton = styled.button`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background: rgba(16, 18, 21, 1);
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
`;
