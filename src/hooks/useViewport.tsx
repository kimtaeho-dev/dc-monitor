import {
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

import { getViewportData } from '../utils/viewport';

function useViewport() {
  const [state, setState] = useState(getViewportData());

  const handleResize = useCallback(() => {
    setState(getViewportData());
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
