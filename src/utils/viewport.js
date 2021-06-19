const MAX_MOBILE_WIDTH = 768;

export const getViewportData = () => {
  const { innerWidth, innerHeight } = window;

  return {
    width: innerWidth,
    height: innerHeight,
    isMobile: innerWidth <= MAX_MOBILE_WIDTH,
  };
};
