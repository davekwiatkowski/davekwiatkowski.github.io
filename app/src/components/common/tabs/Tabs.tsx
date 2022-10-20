import { FC, ReactElement, useCallback, useState } from 'react';
import TabLabel from './TabLabel';

const Tabs: FC<{ children: ReactElement[] }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className='p-4'>
      <div className='flex gap-4 mb-4'>
        {children?.map((child) => {
          const { label } = child.props;
          return (
            <TabLabel
              key={label}
              label={label}
              activeTab={activeTab}
              onClick={handleTabClick}></TabLabel>
          );
        })}
      </div>
      <div>
        {children?.map((child) => {
          const { label } = child.props;
          return label === activeTab ? child.props.children : undefined;
        })}
      </div>
    </div>
  );
};

export default Tabs;
