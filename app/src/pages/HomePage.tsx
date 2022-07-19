import React, { FC } from 'react';
import Urls from '../Urls';
import Link from '../components/Link';
import BlogPosts from '../components/BlogPosts';
import Runs from '../components/Runs';

const HomePage: FC = () => {
  return (
    <div className='leading-none md:pt-4'>
      <div className='flex flex-row flex-wrap gap-4 pt-4 pb-4 pl-4 pr-4 md:pt-0 md:pb-0 md:flex-nowrap'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl sm:text-5xl whitespace-nowrap'>
            Dave Kwiatkowski
          </h1>
          <div className='flex flex-row flex-wrap gap-1'>
            <Link highlight href={Urls.instagram}>
              Instagram
            </Link>
            <Link highlight href={Urls.strava}>
              Strava
            </Link>
            <Link href={Urls.codepen}>CodePen</Link>
            <Link href='mailto:hi@davekwiatkowski.com'>Send me an email</Link>
          </div>
        </div>
        <p className='w-full max-w-4xl text-sm font-light md:w-none'>
          I run for Seattle Running Club.
          <br />
          I am from the C'Ville in Virginia.
          <br />I have plans.
        </p>
      </div>
      <BlogPosts />
      <Runs />
    </div>
  );
};

export default HomePage;
