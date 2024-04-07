import { FC, useCallback, useState } from 'react';

const TabLabel: FC<{
  label: string;
  activeTab: string;
  onClick: (tab: string) => void;
}> = ({ label, activeTab, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleClick = useCallback(() => onClick(label), [label, onClick]);

  return (
    <div
      className={`
      cursor-pointer select-none capitalize pt-1 pb-1 pl-2 pr-2 border
      ${
        label === activeTab
          ? 'text-BG bg-TEXT border-TEXT'
          : 'text-TEXT_DE_EMP border-TEXT_DE_EMP'
      }
      ${isHovering ? 'bg-HIGHLIGHT' : ''}
      `}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {label}
    </div>
  );
};

export default TabLabel;
