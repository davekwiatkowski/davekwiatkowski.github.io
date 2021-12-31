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
}) => {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <table className='mb-4 mr-4 text-sm text-left divide-y divide-gray-200 table-fixed'>
      <thead>
        <tr>
          <th className='text-4xl font-normal text-gray-200'>
            {String(index).padStart(3, '0')}
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200'>
        <tr>
          <td className='w-20 mt-1 mb-1 '>{date.toLocaleDateString()}</td>
          <td className='flex w-48 gap-1 pr-2 mt-1 mb-1'>
            {place && (
              <div className='pl-2 pr-2 bg-pink-100 rounded-xl'>{place}</div>
            )}
            {type === 'Race' && (
              <div className='pl-2 pr-2 bg-red-100 rounded-xl'>{'Race'}</div>
            )}
            {type === 'Backyard' && (
              <div className='pl-2 pr-2 bg-blue-100 rounded-xl'>
                {'Backyard'}
              </div>
            )}
            {type === 'FKT' && (
              <div className='pl-2 pr-2 bg-purple-100 rounded-xl'>{'FKT'}</div>
            )}
            {fktType === 'Unsupported' && (
              <div className='pl-2 pr-2 bg-purple-50 rounded-xl'>
                {'Unsupported'}
              </div>
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
  );
};

export default Run;
