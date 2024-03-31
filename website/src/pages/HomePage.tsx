import { FC } from 'react';
import urlConstants from '../constants/urlConstants';
import Button from '../components/common/Button';
import PostList from '../components/postList/PostList';
import RunList from '../components/runList/RunList';
import Tabs from '../components/common/tabs/Tabs';
import Tab from '../components/common/tabs/Tab';

const HomePage: FC<{ tab: 'blog' | 'runs' }> = ({ tab }) => (
  <div className="flex justify-center w-full">
    <div className="w-full">
      <div className="flex flex-row flex-wrap items-start h-auto gap-4 justify-between p-4">
        <h1 className="text-PRIMARY font-bold text-lg sm:text-2xl">
          Dave Kwiatkowski
        </h1>
        <div className="text-base sm:text-lg">
          {' '}
          <Button href={urlConstants.instagram}>instagram</Button>
          ,
          {' '}
          <Button href={urlConstants.strava}>strava</Button>
          ,
          {' '}
          <Button href={urlConstants.codepen}>codepen</Button>
          ,
          {' '}
          <Button href={urlConstants.linkedin}>linkedin</Button>
          ,
          {' '}
          <Button href={urlConstants.github}>github</Button>
          ,
          {' '}
          <Button href="mailto:hi@davekwiatkowski.com">email</Button>
        </div>
      </div>
      <Tabs activeTab={tab}>
        <Tab label="blog">
          <PostList />
        </Tab>
        <Tab label="runs">
          <RunList />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default HomePage;
