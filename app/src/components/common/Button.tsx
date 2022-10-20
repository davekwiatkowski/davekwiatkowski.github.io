import { FC } from 'react';

const Button: FC<{
  href?: string;
  onClick?: () => void;
  highlight?: boolean;
}> = ({ highlight, href, onClick, children }) => {
  return (
    <a
      className={`${
        highlight ? `before:content-['⭑_']` : ''
      } whitespace-nowrap underline hover:opacity-100 opacity-50 transition-opacity`}
      href={href}
      target='_blank'
      rel='noreferrer'>
      {children}
    </a>
  );
};

export default Button;
