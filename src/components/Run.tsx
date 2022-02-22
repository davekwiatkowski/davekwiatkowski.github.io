import React, { FC, useCallback } from 'react';
import { IRun } from '../Runs';
import Tag from './Tag';

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
  yards,
}) => {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <div className='w-full pb-4 pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <table className='w-full text-sm text-left divide-y divide-gray-300 table-fixed'>
        <thead>
          <tr>
            <th className='w-20 italic font-light text-black'>
              {date.toLocaleDateString()}
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-300'>
          <tr>
            <td className='mt-1 mb-1'>Type</td>
            <td className='flex flex-wrap gap-1 pr-2 mt-1 mb-1'>
              {type === 'Backyard' && (
                <>
                  <Tag className='bg-blue-200'>{type}</Tag>
                  <Tag className='bg-blue-100'>{yards} yards</Tag>
                </>
              )}
              {type === 'FKT' && (
                <>
                  <Tag className='bg-fuchsia-200'>{type}</Tag>
                  <Tag className='bg-fuchsia-100'>{fktType}</Tag>
                </>
              )}
              {type === 'Race' && <Tag className='bg-red-200'>{type}</Tag>}
              {place && <Tag className='bg-red-100'>{place}</Tag>}
            </td>
          </tr>
          <tr>
            <td>Course</td>
            <td className='pr-2 font-normal'>{course}</td>
          </tr>
          <tr>
            <td className='pr-2'>Location</td>
            <td className='pr-2'>{location}</td>
          </tr>
          <tr>
            <td className='pr-2'>Distance</td>
            <td className='pr-2'>{distance}</td>
          </tr>
          <tr>
            <td className='pr-2'>Time</td>
            <td className='pr-2'>{time}</td>
          </tr>
          <tr>
            <td>Link</td>
            <td
              className='flex cursor-pointer hover:bg-gray-100'
              onClick={handleClick}>
              <div className='underline '>See result →</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Run;
