import { FC, useCallback } from 'react';

const TabLabel: FC<{
  label: string;
  activeTab: string;
  onClick: (tab: string) => void;
}> = ({ label, activeTab, onClick }) => {
  const handleClick = useCallback(() => onClick(label), [label, onClick]);
  const isActive = label === activeTab;

  return (
    <button
      type="button"
      role="tab"
      id={`tab-${label}`}
      aria-selected={isActive}
      aria-controls={`tabpanel-${label}`}
      tabIndex={isActive ? 0 : -1}
      className={`
        cursor-pointer select-none capitalize text-sm font-medium tracking-wide whitespace-nowrap
        pb-3 border-b-2 transition-all duration-300 ease-out min-h-[44px]
        ${isActive
        ? 'text-TEXT border-PRIMARY'
        : 'text-TEXT_DE_EMP border-transparent hover:text-TEXT hover:border-BORDER'
        }
      `}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TabLabel;
