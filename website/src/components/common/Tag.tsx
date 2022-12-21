import { FC } from 'react';

const Tag: FC<{ className: string }> = ({ children, className }) => (
  <div className={`${className} pl-1 pr-1 whitespace-nowrap rounded-xl`}>
    {children}
  </div>
);

export default Tag;
