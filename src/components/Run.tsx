import React, { FC, useCallback } from 'react';
import { IRun } from '../Runs';

interface IRunProps extends IRun {
  index: number;
}

const Run: FC<IRunProps> = ({
  link,
  course,
  place,
  date,
  location,
  distance,
  time,
  fktType,
  type,
  index,
  yards,
  surface,
}) => {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <div className='w-full pb-4 pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <table className='w-full text-sm text-left divide-y divide-black table-fixed'>
        <thead>
          <tr>
            <th className='w-20 text-4xl font-normal text-black'>
              {String(index).padStart(3, '0')}
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-black'>
          <tr>
            <td className='mt-1 mb-1 '>{date.toLocaleDateString()}</td>
            <td className='flex flex-wrap gap-1 pr-2 mt-1 mb-1'>
              {surface === 'Trail' && (
                <div className='pl-2 pr-2 bg-lime-200 whitespace-nowrap rounded-xl'>
                  {'Trail'}
                </div>
              )}
              {surface === 'Road' && (
                <div className='pl-2 pr-2 bg-blue-200 whitespace-nowrap rounded-xl'>
                  {'Road'}
                </div>
              )}
              {type === 'Race' && (
                <div className='pl-2 pr-2 bg-red-200 whitespace-nowrap rounded-xl'>
                  {'Race'}
                </div>
              )}
              {type === 'Backyard' && (
                <>
                  <div className='pl-2 pr-2 bg-cyan-200 rounded-xl'>
                    {'BYU'}
                  </div>
                  <div className='pl-2 pr-2 bg-cyan-100 rounded-xl'>{`${yards} yd`}</div>
                </>
              )}
              {type === 'FKT' && (
                <div className='pl-2 pr-2 bg-fuchsia-200 rounded-xl'>
                  {'FKT'}
                </div>
              )}
              {fktType === 'Unsupported' && (
                <div className='pl-2 pr-2 bg-fuchsia-100 rounded-xl'>
                  {'Uns.'}
                </div>
              )}
              {place && (
                <div className='pl-2 pr-2 bg-red-100 rounded-xl'>{place}</div>
              )}
            </td>
          </tr>
          <tr>
            <td className='pr-2'>{'Course'}</td>
            <td className='pr-2'>{course}</td>
          </tr>
          <tr>
            <td className='pr-2'>{'Location'}</td>
            <td className='pr-2'>{location}</td>
          </tr>
          <tr>
            <td className='pr-2'>{'Distance'}</td>
            <td className='pr-2'>{distance}</td>
          </tr>
          <tr>
            <td className='pr-2'>{'Time'}</td>
            <td className='pr-2'>{time}</td>
          </tr>
          <tr>
            <td>Reference</td>
            <td className='flex'>
              <div
                onClick={handleClick}
                className='underline cursor-pointer hover:text-blue-500'>
                Link to result
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Run;
