import { FC } from 'react';
import Urls from '../Urls';
import Button from '../components/Button';
import BlogPosts from '../components/BlogPosts';
import Runs from '../components/Runs';

const HomePage: FC = () => {
  return (
    <div className='flex justify-center w-full pt-4 pb-4 md:pt-12 md:pb-12'>
      <div className='w-full max-w-7xl'>
        <div className='flex flex-row flex-wrap h-auto gap-4 pt-4 pb-4 pl-4 pr-4 md:pt-0 md:pb-0 sm:flex-nowrap'>
          <h1 className='w-full text-3xl text-left sm:text-4xl sm:w-1/2 lg:w-1/3'>
            This is the website for Dave Kwiatkowski.
          </h1>
          <p className='w-full text-sm font-light sm:text-lg sm:w-1/2 lg:w-2/3'>
            Hi! I'm Dave! I live in Seattle and run for{' '}
            <Button href='https://www.instagram.com/seattlerunning/'>
              @seattlerunning
            </Button>
            .
            <br />
            The hottest links on the web:{' '}
            <Button highlight href={Urls.instagram}>
              my instagram
            </Button>{' '}
            <Button highlight href={Urls.strava}>
              my strava
            </Button>{' '}
            <Button href={Urls.codepen}>my codepen</Button>{' '}
            <Button href='mailto:hi@davekwiatkowski.com'>
              hi@davekwiatkowski.com
            </Button>
          </p>
        </div>
        <BlogPosts />
        <Runs />
      </div>
    </div>
  );
};

export default HomePage;
