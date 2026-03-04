import {
  FC, ReactElement,
} from 'react';
import { useNavigate } from 'react-router-dom';
import TabLabel from './TabLabel';
import RouteName from '../../../constants/Route';
import ScrollFade from '../ScrollFade';

const Tabs: FC<{ children: ReactElement[], activeTab: RouteName }> = ({ children, activeTab }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col h-full">
      <ScrollFade direction="horizontal" fadeSize={20} className="shrink-0 border-b border-BORDER hidden md:block">
        <div
          className="flex px-4 sm:px-10 pt-3 sm:pt-5 gap-4 sm:gap-6"
          role="tablist"
          aria-label="Page sections"
        >
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
      </ScrollFade>
      {children?.map((child) => {
        const { label } = child.props;
        if (label !== activeTab) return null;
        return (
          <div
            key={label}
            role="tabpanel"
            id={`tabpanel-${label}`}
            aria-labelledby={`tab-${label}`}
            tabIndex={0}
            className="tab-content-enter flex-1 min-h-0"
          >
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
