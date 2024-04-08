import { FC } from 'react';

const Tab: FC<{ label: string; children?: React.ReactNode }> = ({ children, label }) => (
  <div id={label}>
    {children}
  </div>
);

export default Tab;
