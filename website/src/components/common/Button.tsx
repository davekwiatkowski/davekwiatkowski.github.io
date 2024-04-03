import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { FC } from 'react';

const Button: FC<{
  href?: string;
  highlight?: boolean;
  children?: React.ReactNode;
  hasLinkIcon?: boolean;
  className?: string;
  isFullWidth?: boolean;
}> = ({
  highlight, href, children, hasLinkIcon, className = '', isFullWidth,
}) => (
  <a
    className={`${
      highlight ? 'font-bold' : ''
    } ${isFullWidth && 'w-full justify-between'} whitespace-nowrap hover:text-LINK_HOVER text-LINK transition-opacity flex gap-1 ${className}}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
    {hasLinkIcon && <ArrowUpRightIcon width={18} />}
  </a>
);

export default Button;
