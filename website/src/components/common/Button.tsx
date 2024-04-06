import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { FC, useState } from 'react';

const Button: FC<{
  href?: string;
  highlight?: boolean;
  children?: React.ReactNode;
  hasLinkIcon?: boolean;
  className?: string;
  isFullWidth?: boolean;
}> = ({
  highlight,
  href,
  children,
  hasLinkIcon,
  className = '',
  isFullWidth,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      className={`${
        highlight ? 'font-bold' : ''
      } ${isFullWidth && 'w-full justify-between'} whitespace-nowrap hover:text-LINK_HOVER text-LINK transition-opacity inline-flex gap-1 ${className}}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {children}
      {hasLinkIcon && <ArrowUpRightIcon className={`transition-transform ${isHovering ? 'rotate-45' : 'rotate-0'}`} width={18} />}
    </a>
  );
};

export default Button;
