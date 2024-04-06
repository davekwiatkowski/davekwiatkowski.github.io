import { FC } from 'react';

const Tag: FC<{ className?: string; children?: React.ReactNode }> = ({ children, className = '' }) => (
  <div className={`${className} whitespace-nowrap border-PRIMARY border rounded-3xl pl-2 pr-2 italic`}>
    {children}
  </div>
);

export default Tag;
