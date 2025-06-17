import { FC } from 'react';

const Tab: FC<{ label: string; children?: React.ReactNode; onClick?: ()=>void }> = ({ children, label, onClick }) => (
  <div id={label} onClick={() => onClick?.()}>
    {children}
  </div>
);

export default Tab;
