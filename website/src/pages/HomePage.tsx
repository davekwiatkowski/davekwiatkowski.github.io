import { FC } from 'react';
import urlConstants from '../constants/urlConstants';
import Button from '../components/common/Button';
import BlogPosts from '../components/blogPost/BlogPosts';
import Runs from '../components/run/Runs';
import Tabs from '../components/common/tabs/Tabs';
import Tab from '../components/common/tabs/Tab';

const HomePage: FC = () => (
  <div className="flex justify-center w-full pt-4 pb-4 md:pt-12 md:pb-12">
    <div className="w-full max-w-7xl">
      <div className="flex flex-row flex-wrap h-auto gap-4 pt-4 pb-4 pl-4 pr-4 md:pt-0 md:pb-0 sm:flex-nowrap">
        <h1 className="w-full text-3xl text-left sm:text-4xl sm:w-1/2 lg:w-1/3">
          Dave Kwiatkowski
        </h1>
        <div className="w-full text-sm font-light sm:text-lg sm:w-1/2 lg:w-2/3">
          <ul className='list-["-_"] list-outside'>
            <li>currently just a runner and a coding person</li>
            <li>
              supported by
              {' '}
              <Button href="https://www.instagram.com/seattlerunning/">
                @seattlerunning
              </Button>
            </li>
            <li>
              here&apos;s my:
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
              <Button href="mailto:hi@davekwiatkowski.com">email</Button>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <Tab label="blog">
          <BlogPosts />
        </Tab>
        <Tab label="runs">
          <Runs />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default HomePage;
