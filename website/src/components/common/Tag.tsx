import { FC } from 'react';

const Tag: FC<{ className?: string; children?: React.ReactNode }> = ({ children, className = '' }) => (
  <div className={`${className} whitespace-nowrap font-extralight`}>
    {children}
    .
  </div>
);

export default Tag;
