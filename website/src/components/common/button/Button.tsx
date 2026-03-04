import { FC, useMemo, useState } from 'react';
import LinkIcon from './LinkIcon';

const Button: FC<{
  href?: string;
  highlight?: boolean;
  children?: React.ReactNode;
  hasLinkIcon?: boolean;
  className?: string;
  isFullWidth?: boolean;
  isSamePage?: boolean;
  onClick?: (event: any) => void;
  color?: string;
}> = ({
  highlight,
  href,
  children,
  hasLinkIcon,
  className = '',
  isFullWidth,
  isSamePage = false,
  onClick,
  color,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const mainClassName = useMemo(() => `
    items-center cursor-pointer whitespace-nowrap border-b inline-flex gap-1
    transition-all duration-200 ease-out
    ${highlight ? 'font-medium' : ''} 
    ${isFullWidth ? 'w-full justify-between' : ''}
    ${className} 
    ${color ? '' : 'border-PRIMARY/40'}
    ${isHovering ? 'border-PRIMARY text-TEXT' : ''}
    ${!color && !isHovering ? 'text-PRIMARY' : ''}
  `, [className, color, highlight, isFullWidth, isHovering]);
  const style = useMemo(() => ({ color: isHovering ? undefined : color, borderColor: color }), [color, isHovering]);

  return (
    <>
      {
        href && (
          <a
            className={mainClassName}
            href={href}
            target={isSamePage ? undefined : '_blank'}
            rel="noreferrer"
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            style={style}
          >
            {children}
            {hasLinkIcon && <LinkIcon isHovering={isHovering} />}
          </a>
        )
      }
      {
        !href && (
          <button
            className={mainClassName}
            type="button"
            onClick={onClick}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            style={style}
          >
            {children}
            {hasLinkIcon && <LinkIcon isHovering={isHovering} />}
          </button>
        )
      }
    </>
  );
};

export default Button;
