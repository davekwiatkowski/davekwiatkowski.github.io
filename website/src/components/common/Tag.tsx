import { FC } from 'react';

const Tag: FC<{ className: string }> = ({ children, className }) => (
  <div className={`${className} whitespace-nowrap pl-2 pr-2 text-BG font-extralight`}>
    {children}
  </div>
);

export default Tag;
