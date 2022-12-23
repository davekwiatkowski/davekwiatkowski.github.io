import {
  FC, ReactElement, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import TabLabel from './TabLabel';

const Tabs: FC<{ children: ReactElement[], activeTab: 'runs' | 'blog' }> = ({ children, activeTab }) => {
  const navigate = useNavigate();

  const handleTabClick = useCallback((tab: string) => {
    navigate(`/${tab}`);
  }, [navigate]);

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        {children?.map((child) => {
          const { label } = child.props;
          return (
            <TabLabel
              key={label}
              label={label}
              activeTab={activeTab}
              onClick={handleTabClick}
            />
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
