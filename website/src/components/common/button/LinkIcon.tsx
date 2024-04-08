import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { FC } from 'react';

const LinkIcon: FC<{ isHovering?: boolean }> = ({ isHovering }) => (
  <ArrowUpRightIcon
    className={`
      transition-transform 
      ${isHovering ? 'rotate-45' : 'rotate-0'}
    `}
    width={18}
  />
);

export default LinkIcon;
