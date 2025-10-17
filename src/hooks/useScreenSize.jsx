import { useState, useEffect } from 'react';

function getScreenDiagonal(width, height) {
  return Math.sqrt(width * width + height * height);
}

function isLandscape(width, height) {
  return width > height;
}

const breakpoints = {
  sm: 550,
  md: 880,
  lg: 1172,
  xl: 1466,
  '2xl': 1760,
};

function getBreakpoint(diagonal) {
  if (diagonal < breakpoints.sm) return 'base';
  if (diagonal < breakpoints.md) return 'sm';
  if (diagonal < breakpoints.lg) return 'md';
  if (diagonal < breakpoints.xl) return 'lg';
  if (diagonal < breakpoints['2xl']) return 'xl';
  return '2xl';
}

export function useDiagonalBreakpointValue(values) {
  const { breakpoint } = useScreenSize();
  const breakpointOrder = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];

  const currentIndex = breakpointOrder.indexOf(breakpoint);

  for (let i = currentIndex; i >= 0; i--) {
    const currentBreakpointName = breakpointOrder[i];
    if (values[currentBreakpointName] !== undefined) {
      return values[currentBreakpointName];
    }
  }

  return values.base;
}

export function useResponsiveSizes() {
  const respEM = useDiagonalBreakpointValue({ base: '0.5rem', sm: '0.75rem', md: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem' });
  const respSmall = useDiagonalBreakpointValue({ base: '0.25rem', sm: '0.325rem', md: '0.5rem', lg: '0.75rem', xl: '1rem', '2xl': '1.25rem' });
  const respTextSize = useDiagonalBreakpointValue({ base: '0.75rem', sm: '1rem', md: '1.125rem', lg: '1.25rem', xl: '1.325rem', '2xl': '1.5rem' });
  const respHeadingSize = useDiagonalBreakpointValue({ base: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem', '2xl': '2.5rem' });
  
    return { respEM, respSmall, respTextSize, respHeadingSize };

}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    diagonal: getScreenDiagonal(window.innerWidth, window.innerHeight),
    isLandscape: isLandscape(window.innerWidth, window.innerHeight),
    breakpoint: getBreakpoint(getScreenDiagonal(window.innerWidth, window.innerHeight)),
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const diagonal = getScreenDiagonal(width, height);
      setScreenSize({
        width,
        height,
        diagonal,
        isLandscape: isLandscape(width, height),
        breakpoint: getBreakpoint(diagonal),
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}
