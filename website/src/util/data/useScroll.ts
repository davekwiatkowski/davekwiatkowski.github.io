import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

const useScroll = (offset: number) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const handleScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    if (winScroll < offset) {
      setScrollTop(0);
      setIsHidden(true);
      return;
    }

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight - offset;
    const scrollDistance = ((winScroll - offset) / height) * 100;
    setScrollTop(scrollDistance);
    setIsHidden(false);
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return useMemo(() => ({
    scrollTop,
    isHidden,
  }), [isHidden, scrollTop]);
};

export default useScroll;
