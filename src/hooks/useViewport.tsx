import {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

function useViewport() {
  const [state, setState] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = useCallback(() => {
    setState({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return state;
}

export default useViewport;
