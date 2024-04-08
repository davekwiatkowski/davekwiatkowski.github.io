import { FC } from 'react';
import Button from '../button/Button';

const BlockContentLink: FC<{ mark: any; children?: React.ReactNode }> = ({ mark, children }) => (
  <Button href={mark.href}>
    {children}
  </Button>
);

export default BlockContentLink;
