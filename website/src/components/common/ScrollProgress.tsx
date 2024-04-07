import { FC } from 'react';
import useScroll from '../../util/data/useScroll';

const ScrollProgress:FC<{
  offset?: number,
  completedColor?: string,
  togoColor?: string,
  children?: React.ReactNode
}> = ({
  offset = 0,
  completedColor,
  togoColor,
  children,
}) => {
  const { scrollTop, isHidden } = useScroll(offset);

  return (
    <div
      className={`
      fixed top-0 left-0 z-20 w-full transition-transform
      ${isHidden ? 'translate-y-[-100%]' : 'translate-y-0'}
    `}
      style={{ backgroundColor: togoColor ?? 'white' }}
    >
      <div
        className="h-[5px]"
        style={{
          width: `${scrollTop}%`,
          backgroundColor: completedColor ?? 'black',
        }}
      />
      {children}
    </div>
  );
};

export default ScrollProgress;
