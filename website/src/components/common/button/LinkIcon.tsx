import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { FC } from 'react';

const LinkIcon: FC<{ isHovering?: boolean }> = ({ isHovering }) => (
  <ArrowUpRightIcon
    className={`
      transition-transform duration-200
      ${isHovering ? 'translate-x-0.5 -translate-y-0.5' : ''}
    `}
    width={14}
  />
);

export default LinkIcon;
