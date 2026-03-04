import {
  FC, useRef, useEffect, useState, useCallback,
} from 'react';

const FADE_SIZE = 40;
const SCROLL_THRESHOLD = 4;

const DownChevron: FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const UpChevron: FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const LeftChevron: FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

const RightChevron: FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const ScrollIndicator: FC<{
  direction: 'vertical' | 'horizontal';
  position: 'start' | 'end';
  visible: boolean;
}> = ({ direction, position, visible }) => {
  const isVertical = direction === 'vertical';
  const isStart = position === 'start';

  const getPositionClass = () => {
    if (isVertical && isStart) return 'top-2 left-1/2 -translate-x-1/2';
    if (isVertical) return 'bottom-2 left-1/2 -translate-x-1/2';
    if (isStart) return 'left-2 top-1/2 -translate-y-1/2';
    return 'right-2 top-1/2 -translate-y-1/2';
  };

  const getBounceClass = () => {
    if (!isVertical) return '';
    return isStart ? 'scroll-indicator-bounce-up' : 'scroll-indicator-bounce-down';
  };

  const getIcon = () => {
    if (isVertical && isStart) return <UpChevron />;
    if (isVertical) return <DownChevron />;
    if (isStart) return <LeftChevron />;
    return <RightChevron />;
  };

  return (
    <div
      className={`
        absolute z-20 pointer-events-none flex items-center justify-center
        transition-opacity duration-500 ease-out
        ${getPositionClass()}
      `}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className={`
        rounded-full bg-TEXT/5 backdrop-blur-sm border border-BORDER/50 flex items-center justify-center
        ${isVertical ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-6 h-6 sm:w-7 sm:h-7'}
      `}
      >
        <span className={`text-TEXT_DE_EMP ${getBounceClass()}`}>
          {getIcon()}
        </span>
      </div>
    </div>
  );
};

const ScrollFade: FC<{
  children?: React.ReactNode;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  fadeColor?: string;
  fadeSize?: number;
  showIndicator?: boolean;
}> = ({
  children,
  className = '',
  direction = 'vertical',
  fadeColor = 'var(--fade-color, #FAF9F7)',
  fadeSize = FADE_SIZE,
  showIndicator = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (direction === 'vertical') {
      setCanScrollStart(el.scrollTop > SCROLL_THRESHOLD);
      setCanScrollEnd(
        el.scrollHeight - el.scrollTop - el.clientHeight > SCROLL_THRESHOLD,
      );
    } else {
      setCanScrollStart(el.scrollLeft > SCROLL_THRESHOLD);
      setCanScrollEnd(
        el.scrollWidth - el.scrollLeft - el.clientWidth > SCROLL_THRESHOLD,
      );
    }
  }, [direction]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);

    const observer = new MutationObserver(checkScroll);
    observer.observe(el, { childList: true, subtree: true });

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  const isVertical = direction === 'vertical';

  const startGradient = isVertical
    ? `linear-gradient(to bottom, ${fadeColor}, transparent)`
    : `linear-gradient(to right, ${fadeColor}, transparent)`;
  const endGradient = isVertical
    ? `linear-gradient(to top, ${fadeColor}, transparent)`
    : `linear-gradient(to left, ${fadeColor}, transparent)`;

  const startStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: isVertical ? 0 : undefined,
    bottom: isVertical ? undefined : 0,
    width: isVertical ? '100%' : fadeSize,
    height: isVertical ? fadeSize : '100%',
    background: startGradient,
    pointerEvents: 'none',
    zIndex: 10,
    opacity: canScrollStart ? 1 : 0,
    transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  };

  const endStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: isVertical ? 0 : undefined,
    top: isVertical ? undefined : 0,
    width: isVertical ? '100%' : fadeSize,
    height: isVertical ? fadeSize : '100%',
    background: endGradient,
    pointerEvents: 'none',
    zIndex: 10,
    opacity: canScrollEnd ? 1 : 0,
    transition: 'opacity 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  };

  return (
    <div className={`relative ${className}`}>
      <div style={startStyle} aria-hidden="true" />
      {showIndicator && (
        <ScrollIndicator
          direction={direction}
          position="start"
          visible={canScrollStart}
        />
      )}
      <div
        ref={scrollRef}
        className={`
          w-full h-full hide-scrollbar
          ${isVertical ? 'overflow-y-auto' : 'overflow-x-auto'}
        `}
      >
        {children}
      </div>
      <div style={endStyle} aria-hidden="true" />
      {showIndicator && (
        <ScrollIndicator
          direction={direction}
          position="end"
          visible={canScrollEnd}
        />
      )}
    </div>
  );
};

export default ScrollFade;
