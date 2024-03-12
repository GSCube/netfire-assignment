import styled from 'styled-components';

export const VideoControlWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
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

export const VideoWrapper = styled.div`
  position: relative;
`;
