import { FC, useContext } from 'react';
import { CursorContext } from '../cursor/CursorProvider';

const Button: FC<{
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
}> = ({ highlight, href, onClick, children }) => {
  const { setIsHovering } = useContext(CursorContext);

  return (
    <a
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onClick?.()}
      className={`${
        highlight ? `before:content-['⭑_']` : ''
      } pl-[0.5em] pr-[0.5em] hover:shadow-md transition bg-white hover:bg-blue-200 rounded-full whitespace-nowrap`}
      href={href}
      target='_blank'
      rel='noreferrer'>
      {children}
    </a>
  );
};

export default Button;