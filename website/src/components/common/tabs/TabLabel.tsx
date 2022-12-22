import { FC, useCallback } from 'react';

const TabLabel: FC<{
  label: string;
  activeTab: string;
  onClick: (tab: string) => void;
}> = ({ label, activeTab, onClick }) => {
  const handleClick = useCallback(() => onClick(label), [label, onClick]);

  return (
    <div
      className={`cursor-pointer transition-all select-none capitalize border-b-2 ${
        label === activeTab
          ? 'text-PRIMARY border-PRIMARY'
          : 'text-TEXT_DE_EMP border-TEXT_DE_EMP'
      }`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default TabLabel;
