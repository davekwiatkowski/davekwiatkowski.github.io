import { FC } from 'react';

const Tab: FC<{ label: string }> = ({ children, label }) => <div id={label}>{children}</div>;

export default Tab;
