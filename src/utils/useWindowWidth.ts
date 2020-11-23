import { useState, useEffect } from 'react';

interface UseWindowWidthData {
  width: number;
  isMobile: boolean;
}

function getWindowWidth(): number {
  const { innerWidth } = window;

  return innerWidth;
}

export default function useWindowWidth(): UseWindowWidthData {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowWidth,
    isMobile: windowWidth < 480,
  };
}
