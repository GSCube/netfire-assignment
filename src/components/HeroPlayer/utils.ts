const padTime = (time: number) => {
  return time.toString().padStart(2, '0');
};

export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${padTime(minutes)}:${padTime(seconds)}`;
};
