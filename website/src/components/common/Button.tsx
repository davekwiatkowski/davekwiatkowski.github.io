import { FC } from 'react';

const Button: FC<{
  href?: string;
  highlight?: boolean;
}> = ({ highlight, href, children }) => (
  <a
    className={`${
      highlight ? "before:content-['⭑_'] font-bold" : ''
    } whitespace-nowrap underline hover:text-LINK_HOVER text-LINK transition-opacity`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default Button;
