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
    <div className='p-8 '>
      <p>Hi!</p>
      <p>I live in Seattle.</p>
      <p>I run!</p>
      <p>
        You can follow me on <Link href={Urls.strava}>Strava</Link> or{' '}
        <Link href={Urls.instagram}>Instagram</Link>.
      </p>
      <div className='pt-8 pb-8'>
        <p className='pb-4'>My recent notable runs:</p>
        <div className='flex flex-row flex-wrap max-w-screen-xl'>
          {runs.map((run, i) => (
            <Run {...run} key={i} index={runs.length - i} />
          ))}
        </div>
      </div>
      <p>Reach out to me if you want! </p>
      <p>
        {' '}
        <Link href='mailto:hi@davekwiatkowski.com'>hi@davekwiatkowski.com</Link>
      </p>
    </div>
  );
};

export default App;
