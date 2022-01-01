import { FC } from 'react';
const Tag: FC<{ className: string }> = ({ children, className }) => {
  return (
    <div className={`${className} pl-1 pr-1 whitespace-nowrap rounded-xl`}>
      {children}
    </div>
  );
};

export default Tag;
