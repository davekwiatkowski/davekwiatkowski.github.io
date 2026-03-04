import { FC, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import RunList from '../components/runList/RunList';
import Tabs from '../components/common/tabs/Tabs';
import Tab from '../components/common/tabs/Tab';
import RouteName from '../constants/Route';
import About from '../components/About';
import MainLinkList from '../components/mainLinkList/MainLinkList';
import RecentPosts from '../components/RecentPosts';
import ScrollFade from '../components/common/ScrollFade';

const TAB_TITLES: Record<RouteName, string> = {
  [RouteName.About]: 'Dave Kwiatkowski',
  [RouteName.Blog]: 'Blog — Dave Kwiatkowski',
  [RouteName.Runs]: 'Runs — Dave Kwiatkowski',
};

const TABS = [RouteName.About, RouteName.Blog, RouteName.Runs];

const HomePage: FC<{ tab: RouteName }> = ({ tab }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = TAB_TITLES[tab] || 'Dave Kwiatkowski';
  }, [tab]);

  const handleTabClick = useCallback((name: RouteName) => {
    navigate(`/${name}`);
  }, [navigate]);

  return (
    <div className="flex justify-center w-full h-[100svh] overflow-hidden">
      <div className="w-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <header className="w-full border-b border-BORDER animate-slide-down shrink-0" role="banner">
          <div className="flex flex-row items-center gap-4 justify-between px-4 sm:px-10 py-3 sm:py-5 max-w-screen-xl w-full mx-auto">
            <h1 className="text-TEXT font-HEADING font-semibold text-lg sm:text-2xl tracking-tight whitespace-nowrap shrink-0">
              Dave Kwiatkowski
            </h1>
            <div className="flex items-center gap-1">
              <nav className="flex md:hidden items-center" aria-label="Page sections">
                {TABS.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleTabClick(name)}
                    className={`
                      capitalize text-xs font-medium px-2.5 py-1.5 rounded-md
                      transition-colors duration-200
                      ${tab === name
                      ? 'bg-BG_SECONDARY text-TEXT'
                      : 'text-TEXT_DE_EMP hover:text-TEXT'}
                    `}
                    aria-current={tab === name ? 'page' : undefined}
                  >
                    {name}
                  </button>
                ))}
              </nav>
              <MainLinkList />
            </div>
          </div>
        </header>
        <main id="main-content" className="w-full max-w-screen-xl mx-auto animate-fade-in flex-1 min-h-0" role="main">
          <Tabs activeTab={tab}>
            <Tab label={RouteName.About}>
              <About />
            </Tab>
            <Tab label={RouteName.Blog}>
              <section className="w-full h-full" aria-label="Blog">
                <ScrollFade className="w-full h-full" showIndicator>
                  <RecentPosts />
                </ScrollFade>
              </section>
            </Tab>
            <Tab label={RouteName.Runs}>
              <RunList />
            </Tab>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
