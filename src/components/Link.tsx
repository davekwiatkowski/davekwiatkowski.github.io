import React, { FC } from 'react';

const Link: FC<{ href: string }> = ({ href, children }) => {
  return (
    <a
      className='bg-yellow-50 hover:bg-yellow-100'
      href={href}
      target='_blank'
      rel='noreferrer'>
      {children}
    </a>
  );
};

export default Link;
