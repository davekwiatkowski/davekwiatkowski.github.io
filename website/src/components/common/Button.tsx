import { FC } from 'react';

const Button: FC<{
  href?: string;
  highlight?: boolean;
  children?: React.ReactNode
}> = ({ highlight, href, children }) => (
  <a
    className={`${
      highlight ? 'font-bold' : ''
    } whitespace-nowrap underline hover:text-LINK_HOVER text-LINK transition-opacity`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default Button;
