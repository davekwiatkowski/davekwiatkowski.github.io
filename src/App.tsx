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
      <p className='font-bold'>I run!</p>
      <p>
        You can follow me on <Link href={Urls.strava}>Strava</Link> or{' '}
        <Link href={Urls.instagram}>Instagram</Link>.
      </p>
      <div className='pt-8'>
        <p>My recent running achievements:</p>
        <table className='table-auto'>
          <tbody className='divide-y-4 divide-sky-50 divide'>
            {runs.map((run) => (
              <Run {...run} />
            ))}
          </tbody>
        </table>
      </div>
      <p className='pt-8'>
        Reach out to me if you want!{' '}
        <Link href='mailto:hi@davekwiatkowski.com'>hi@davekwiatkowski.com</Link>
      </p>
      <p>Thanks for visiting!</p>
      <p>🙂</p>
    </div>
  );
};

export default App;
