import './Cursor.css';

import { FC, useCallback, useContext, useEffect, useRef } from 'react';
import { CursorContext } from './CursorProvider';

const sz = 28;
const defaultOpacity = '0.5';
const hoverColor = 'tan';

const Cursor: FC = () => {
  const circle = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  const { isHovering } = useContext(CursorContext);

  const handleLeave = useCallback(() => {
    if (!circle.current || !dot.current) {
      return;
    }
    circle.current.style.opacity = '0';
    dot.current.style.opacity = '0';
  }, []);

  const handleEnter = useCallback(() => {
    if (!circle.current || !dot.current) {
      return;
    }
    circle.current.style.opacity = defaultOpacity;
    dot.current.style.opacity = '1';
  }, []);

  const handleMove = useCallback((ev: MouseEvent) => {
    if (!circle.current || !dot.current) {
      return;
    }
    circle.current.style.top = ev.clientY - sz / 2 + 'px';
    circle.current.style.left = ev.clientX - sz / 2 + 'px';
    dot.current.style.top = ev.clientY - sz / 4 + 'px';
    dot.current.style.left = ev.clientX - sz / 4 + 'px';
  }, []);

  useEffect(() => {
    if (!circle.current || !dot.current) {
      return;
    }
    circle.current.style.transform = isHovering ? 'scale(1.75)' : 'scale(1)';
    circle.current.style.opacity = isHovering ? '0.75' : defaultOpacity;
    circle.current.style.borderColor = isHovering ? hoverColor : 'gray';
    circle.current.style.backgroundColor = isHovering
      ? hoverColor
      : 'transparent';

    dot.current.style.opacity = isHovering ? '0.1' : '1';
  }, [isHovering]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [handleEnter, handleLeave, handleMove]);

  return (
    <>
      <div
        ref={circle}
        style={{ width: sz + 'px', height: sz + 'px' }}
        className='fixed top-0 left-0 z-40 transition-all duration-200 ease-out border-2 rounded-full pointer-events-none'
      />
      <div
        style={{ width: sz / 2 + 'px', height: sz / 2 + 'px' }}
        className='fixed top-0 left-0 z-50 transition ease-out rounded-full pointer-events-none bg-neutral-700'
        ref={dot}
      />
    </>
  );
};

export default Cursor;
