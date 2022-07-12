import { FC, useCallback } from 'react';
import { IRun } from '../Runs';
import Tag from './Tag';

interface IRunProps extends IRun {
  index: number;
  isFirst: boolean;
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
  index,
  isFirst,
}) => {
  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  return (
    <div className={`w-full pb-4 pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5`}>
      <table className='w-full text-sm text-left divide-y divide-gray-300 table-fixed'>
        <thead>
          <tr>
            <th className='w-12 font-light'>{index}</th>
            <th
              className={`italic text-black ${
                isFirst ? 'font-semibold' : 'font-light'
              }`}>
              {date.toLocaleDateString()}
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-300'>
          <tr>
            <td className='mt-1 mb-1 font-light'>Type</td>
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
            <td className='font-light'>Name</td>
            <td className='pr-2'>{course}</td>
          </tr>
          <tr>
            <td className='pr-2 font-light'>Place</td>
            <td className='pr-2'>{location}</td>
          </tr>
          <tr>
            <td className='pr-2 font-light'>Dist.</td>
            <td className='pr-2'>{distance}</td>
          </tr>
          <tr>
            <td className='pr-2 font-light'>Time</td>
            <td className='pr-2'>{time}</td>
          </tr>
          <tr>
            <td className='font-light'>Link</td>
            <td
              className='flex cursor-pointer hover:bg-gray-100'
              onClick={handleClick}>
              <div>
                <span className='underline'>See result</span>
                <span className='ml-1'>→</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Run;
