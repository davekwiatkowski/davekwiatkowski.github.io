import { FC } from 'react';
import IRun from '../types/IRun';
import useSanityFetch from '../util/useSanityFetch';
import LoadingSignal from './LoadingSignal';
import Run from './Run';

const Runs: FC = () => {
  const allRunsData = useSanityFetch(
    `*[_type == "run"]{
      date,
      course,
      link,
      location,
      duration{
        days,
        hours,
        minutes,
        seconds
      },
      distance{
        amount,
        unit,
      },
      type,
      fktType,
      yards,
      place,
    }`
  );

  return (
    <div className='p-4'>
      <div className='flex flex-row flex-wrap max-w-screen-xl'>
        {allRunsData ? (
          allRunsData
            .sort(
              (a: IRun, b: IRun) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((run: IRun, index: number) => (
              <Run
                key={run.date}
                run={run}
                index={allRunsData.length - index}
              />
            ))
        ) : (
          <LoadingSignal />
        )}
      </div>
    </div>
  );
};

export default Runs;
