import { FC } from 'react';
import urlConstants from '../constants/urlConstants';
import Button from '../components/common/Button';
import PostList from '../components/postList/PostList';
import RunList from '../components/runList/RunList';
import Tabs from '../components/common/tabs/Tabs';
import Tab from '../components/common/tabs/Tab';

const HomePage: FC<{ tab: 'blog' | 'runs' }> = ({ tab }) => (
  <div className="flex justify-center w-full pt-4 pb-4 md:pt-12 md:pb-12">
    <div className="w-full max-w-7xl">
      <div className="flex flex-row flex-wrap items-end h-auto gap-4 pt-4 pb-4 pl-4 pr-4 md:pt-0 md:pb-0 sm:flex-nowrap">
        <div className="w-full text-sm font-light sm:w-1/2 lg:w-1/3">
          <ul className='list-["-_"] list-inside text-TEXT_DE_EMP'>
            <li>
              <Button href={urlConstants.mapShare} highlight>Track Dave</Button>
              {' '}
              running across the U.S. on May 1st
            </li>
            <li>
              {' '}
              <Button href={urlConstants.instagram}>instagram</Button>
              ,
              {' '}
              <Button href={urlConstants.strava}>strava</Button>
              ,
              {' '}
              <Button href={urlConstants.codepen}>codepen</Button>
              {' '}
              <Button href="mailto:hi@davekwiatkowski.com">email</Button>
            </li>
          </ul>
        </div>
        {' '}
        <h1 className="w-full text-3xl font-thin text-left sm:text-right sm:text-4xl md:text-5xl lg:text-7xl sm:w-1/2 lg:w-2/3 text-PRIMARY">
          Dave Kwiatkowski
        </h1>
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
