import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { FC, useMemo, useState } from 'react';

const LinkIcon:FC<{ isHovering?: boolean }> = ({ isHovering }) => (
  <ArrowUpRightIcon
    className={`
      transition-transform 
      ${isHovering ? 'rotate-45' : 'rotate-0'}
    `}
    width={18}
  />
);

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
    items-center cursor-pointer whitespace-nowrap border-b border-dashed inline-flex gap-1
    ${highlight ? 'font-bold' : ''} 
    ${isFullWidth ? 'w-full justify-between' : ''}
    ${className}
    ${color ? '' : 'border-LINK'}
    ${isHovering ? 'bg-HIGHLIGHT text-TEXT' : ''}
    ${!color && !isHovering ? 'text-LINK' : ''}
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
