import { FC } from 'react';

const Tag: FC<{ className?: string; children?: React.ReactNode }> = ({ children, className = '' }) => (
  <span
    role="listitem"
    className={`
      whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-medium
      text-TEXT_DE_EMP bg-BG_SECONDARY border border-BORDER
      transition-colors duration-200 ease-out
      hover:border-TEXT_DE_EMP hover:text-TEXT
      ${className}
    `}
  >
    {children}
  </span>
);

export default Tag;
