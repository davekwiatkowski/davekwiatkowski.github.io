import { FC, useCallback } from 'react';
import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import { IRunListItemData } from '../../util/data/useRunListData';
import toOrdinal from '../../util/toOrdinal';
import Tag from '../common/Tag';

const RunListItem: FC<{ index: number; run: IRunListItemData }> = ({ index, run }) => {
  const handleClick = useCallback(() => {
    window.open(run.link);
  }, [run.link]);

  return (
    <div key={index} className="w-full border-r border-b border-PRIMARY sm:w-1/2 lg:w-1/3 text-PRIMARY p-4">
      <table className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-left divide-y table-fixed divide-PRIMARY">
        <thead>
          <tr>
            <th className="w-16 font-extralight text-PRIMARY">
              {index}
            </th>
            <th className={`italic font-extralight text-PRIMARY ${'font-extralight'}`}>{run.date}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-PRIMARY">
          <tr>
            <td className="mt-1 mb-1 font-extralight">Type</td>
            <td className="flex flex-wrap gap-[1px]">
              {run.type === 'Backyard' && (
                <>
                  <Tag className="bg-PRIMARY">{run.type}</Tag>
                  <Tag className="bg-PRIMARY">
                    {run.backyard?.yards}
                    {' '}
                    yards
                  </Tag>
                  <Tag className="bg-PRIMARY">{run.backyard?.place}</Tag>
                </>
              )}
              {run.type === 'FKT' && (
                <>
                  <Tag className="bg-PRIMARY">{run.type}</Tag>
                  <Tag className="bg-PRIMARY">{run.fkt?.type}</Tag>
                </>
              )}
              {run.type === 'Race' && (
                <>
                  <Tag className="bg-PRIMARY">{run.type}</Tag>
                  <Tag className="bg-PRIMARY">{toOrdinal(run.race?.place)}</Tag>
                </>
              )}
              {run.type === 'Adventure' && (
              <Tag className="bg-PRIMARY">{run.type}</Tag>
              )}
            </td>
          </tr>
          <tr>
            <td className="font-extralight">Name</td>
            <td className="pr-2">{run.course}</td>
          </tr>
          <tr>
            <td className="pr-2 font-extralight">Place</td>
            <td className="pr-2">{run.location}</td>
          </tr>
          <tr>
            <td className="pr-2 font-extralight">Dist.</td>
            <td className="pr-2">
              {`${run.distance.amount} ${run.distance.unit}`}
            </td>
          </tr>
          <tr>
            <td className="pr-2 font-extralight">Time</td>
            <td className="pr-2">
              {`
            ${run.duration.days ? `${run.duration.days}d` : ''}
            ${run.duration.hours ? `${run.duration.hours}h` : ''}
            ${run.duration.minutes ? `${run.duration.minutes}m` : ''}
            ${run.duration.seconds ? `${run.duration.seconds}s` : ''}
            `}
            </td>
          </tr>
          <tr>
            <td className="font-extralight">Link</td>
            <td
              className="flex"
            >
              <div onClick={handleClick} className="cursor-pointer flex flex-row justify-between w-full text-LINK hover:text-LINK_HOVER">
                <span className="">See result</span>
                <ArrowUpRightIcon width={20} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RunListItem;