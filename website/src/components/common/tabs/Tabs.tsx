import {
  FC, ReactElement, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import TabLabel from './TabLabel';
import RouteName from '../../../constants/Route';

const Tabs: FC<{ children: ReactElement[], activeTab: RouteName }> = ({ children, activeTab }) => {
  const navigate = useNavigate();

  const handleTabClick = useCallback((tab: string) => {
    navigate(`/${tab}`);
  }, [navigate]);

  return (
    <div>
      <div className="flex gap-4 p-4">
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
