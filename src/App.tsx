import React, { FC, useMemo } from 'react';
import Link from './components/Link';
import Run from './components/Run';
import Runs from './Runs';
import Urls from './Urls';

const App: FC = () => {
  const runs = useMemo(
    () => Runs.sort((a, b) => b.date.getTime() - a.date.getTime()),
    []
  );
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
        <p className='w-full text-sm md:w-none'>
          I am an inhabitant of Seattle from Charlottesville, VA who has a love
          for long runs. Most of my runs consist of going up and down the steep
          streets in Seattle, though nothing beats a nice run on the trails.
          Outside of running, I write code, experiment with different art forms,
          and sometimes go bouldering. If you're in the Seattle area, I'm always
          down to go on a run or chat!
        </p>
      </div>
      <p className='pl-4 pr-4 overflow-hidden font-bold text-display whitespace-nowrap md:pl-0 md:pr-0'>
        I ran...
      </p>
      <div className='p-4'>
        <div className='flex flex-row flex-wrap max-w-screen-xl'>
          {runs.map((run, i) => (
            <Run {...run} key={i} index={runs.length - i} />
          ))}
        </div>
        <p className='italic'>- Dave</p>
      </div>
    </div>
  );
};

export default App;
