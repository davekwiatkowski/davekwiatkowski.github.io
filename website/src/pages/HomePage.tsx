import { FC } from 'react';
import RunList from '../components/runList/RunList';
import Tabs from '../components/common/tabs/Tabs';
import Tab from '../components/common/tabs/Tab';
import RouteName from '../constants/Route';
import About from '../components/About';
import MainLinkList from '../components/mainLinkList/MainLinkList';
import Redirect from '../components/common/Redirect';
import urlConstants from '../constants/urlConstants';

const HomePage: FC<{ tab: RouteName }> = ({ tab }) => (
  <div className="flex justify-center w-full">
    <div className="w-full flex items-center justify-center flex-col">
      <div className="flex flex-row flex-wrap items-start h-auto gap-4 justify-between p-8 max-w-screen-2xl w-full">
        <h1 className="text-PRIMARY font-bold text-lg sm:text-2xl">
          Dave Kwiatkowski
        </h1>
        <MainLinkList />
      </div>
      <Tabs activeTab={tab}>
        <Tab label={RouteName.About}>
          <About />
        </Tab>
        <Tab label={RouteName.Blog} onClick={() => { window.location.href = urlConstants.BLOG_SITE; }}>
          <Redirect url={urlConstants.BLOG_SITE} />
        </Tab>
        <Tab label={RouteName.Runs}>
          <RunList />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default HomePage;
