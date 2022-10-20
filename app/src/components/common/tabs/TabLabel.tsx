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
          ? 'text-blue-500 border-blue-500 opacity-100'
          : 'text-black border-black opacity-50'
      }`}
      onClick={handleClick}>
      {label}
    </div>
  );
};

export default TabLabel;
