import {
  FC, useRef, useEffect, useState, useCallback,
} from 'react';

const GAP = 32;
const FADE_WIDTH = 24;

const Marquee: FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = '', children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    const overflows = content.scrollWidth > container.clientWidth;
    setIsOverflowing(overflows);
    if (overflows) {
      setContentWidth(content.scrollWidth);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, children]);

  const duration = contentWidth / 30;
  const shouldAnimate = isOverflowing && !prefersReducedMotion;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap relative ${className}`}
    >
      {isOverflowing && (
        <>
          <div
            className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: FADE_WIDTH,
              background: 'linear-gradient(to right, var(--fade-color, #FAF9F7), transparent)',
              opacity: 0.7,
              transition: 'opacity 300ms ease-out',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: FADE_WIDTH,
              background: 'linear-gradient(to left, var(--fade-color, #FAF9F7), transparent)',
              opacity: 0.7,
              transition: 'opacity 300ms ease-out',
            }}
            aria-hidden="true"
          />
        </>
      )}
      {shouldAnimate ? (
        <div
          className="inline-flex items-center marquee-scroll"
          style={{
            animationDuration: `${duration}s`,
            gap: `${GAP}px`,
          }}
        >
          <div className="inline-flex shrink-0" ref={contentRef}>{children}</div>
          <div className="inline-flex shrink-0" aria-hidden="true">{children}</div>
        </div>
      ) : (
        <div
          ref={contentRef}
          className={`inline-flex ${isOverflowing ? 'overflow-x-auto hide-scrollbar' : ''}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Marquee;
