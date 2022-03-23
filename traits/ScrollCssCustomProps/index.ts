import { useCallback, useEffect } from 'react';

export default function useScrollCssCustomProps() {
  const scrollHandler = useCallback(() => {
    document.documentElement.style.setProperty('--scroll-x', `${window.scrollX}`);
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}`);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      document.documentElement.style.removeProperty('--scroll-x');
      document.documentElement.style.removeProperty('--scroll-y');
    };
  }, [scrollHandler]);
}
