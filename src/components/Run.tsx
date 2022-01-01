import React, { FC, useCallback, useState } from 'react';
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
  index,
  surface,
  summary,
}) => {
  const [summaryOpen, setSummaryOpen] = useState(false);

  const handleClick = useCallback(() => {
    window.open(link);
  }, [link]);

  const handleOpenSummary = useCallback(() => {
    setSummaryOpen(true);
  }, []);

  const handleCloseSummary = useCallback(() => {
    setSummaryOpen(false);
  }, []);

  return (
    <div className='w-full pb-4 pr-4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <table className='w-full text-sm text-left divide-y divide-black table-fixed'>
        <thead>
          <tr>
            <th className='w-20 text-3xl font-normal text-black'>
              {'#' + String(index).padStart(3, '0')}
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-black'>
          <tr>
            <td className='mt-1 mb-1'>{date.toLocaleDateString()}</td>
            <td className='flex flex-wrap gap-1 pr-2 mt-1 mb-1'>
              {surface === 'Trail' && (
                <Tag className='bg-lime-200'>{surface}</Tag>
              )}
              {surface === 'Road' && (
                <Tag className='bg-cyan-200'>{surface}</Tag>
              )}
              {type === 'Backyard' && (
                <Tag className='bg-purple-200'>{type}</Tag>
              )}
              {type === 'FKT' && <Tag className='bg-teal-200'>{type}</Tag>}
              {fktType === 'Unsupported' && (
                <Tag className='bg-teal-100'>{fktType}</Tag>
              )}
              {type === 'Race' && <Tag className='bg-rose-200'>{type}</Tag>}
              {place && <Tag className='bg-rose-100'>{place}</Tag>}
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
            <td className='pr-2'>Summary</td>
            <td
              className='pr-2 cursor-pointer hover:bg-gray-100'
              onClick={summaryOpen ? handleCloseSummary : handleOpenSummary}>
              <span className='font-bold animate-pulse'>
                {summaryOpen ? '﹣' : '＋'}
              </span>
              {summaryOpen ? summary : summary.substring(0, 15) + '...'}
            </td>
          </tr>
          <tr>
            <td>Reference</td>
            <td
              className='flex cursor-pointer hover:bg-gray-100'
              onClick={handleClick}>
              <div className='underline '>Link to result →</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Run;
