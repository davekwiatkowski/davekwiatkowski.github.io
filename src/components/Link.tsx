import React, { FC } from 'react';

const Link: FC<{ href: string; highlight?: boolean }> = ({
  highlight,
  href,
  children,
}) => {
  return (
    <a
      className={`${
        highlight ? 'bg-yellow-200' : 'bg-white'
      } pl-1 pr-1 text-sm border border-black hover:bg-black hover:text-white rounded-xl`}
      href={href}
      target='_blank'
      rel='noreferrer'>
      {children}
    </a>
  );
};

export default Link;
