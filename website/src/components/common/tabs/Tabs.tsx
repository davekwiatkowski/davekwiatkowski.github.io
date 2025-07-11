import {
  FC, ReactElement,
} from 'react';
import { useNavigate } from 'react-router-dom';
import TabLabel from './TabLabel';
import RouteName from '../../../constants/Route';

const Tabs: FC<{ children: ReactElement[], activeTab: RouteName }> = ({ children, activeTab }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-screen-2xl">
      <div className="flex p-8 pt-2 pb-2 gap-2">
        {children?.map((child) => {
          const { label, onClick } = child.props;
          return (
            <TabLabel
              key={label}
              label={label}
              activeTab={activeTab}
              onClick={(tab) => {
                if (onClick) {
                  onClick();
                } else {
                  navigate(`/${tab}`);
                }
              }}
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
