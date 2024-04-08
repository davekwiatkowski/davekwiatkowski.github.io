import { FC } from 'react';

const Tag: FC<{ className?: string; children?: React.ReactNode }> = ({ children, className = '' }) => (
  <div
    className={`
      whitespace-nowrap rounded-3xl pl-2 text-sm sm:text-base pr-2 italic text-BG bg-TEXT_DE_EMP
      ${className ?? ''} 
    `}
  >
    {children}
  </div>
);

export default Tag;
