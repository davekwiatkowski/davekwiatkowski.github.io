import { FC } from 'react';
import { IRunListItemData } from '../../util/data/useRunListData';
import toOrdinal from '../../util/toOrdinal';
import Tag from '../common/Tag';
import Button from '../common/Button';

const RunListItem: FC<{ index: number; run: IRunListItemData }> = ({ index, run }) => (
  <div key={index} className="w-full p-4 pb-0 border-PRIMARY sm:w-1/2 lg:w-1/3 text-PRIMARY font-extralight">
    <table className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-left divide-y table-fixed divide-PRIMARY">
      <thead>
        <tr>
          <th className="w-16 text-PRIMARY border-r border-PRIMARY text-right pr-2">
            {' '}
          </th>
          <th className="pl-2 text-PRIMARY font-extralight">{run.date}</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-PRIMARY">
        <tr>
          <td className="mt-1 mb-1 border-r border-PRIMARY text-right pr-2">Type</td>
          <td className="pl-2 flex flex-wrap gap-[1px]">
            {run.type === 'Backyard' && (
            <>
              <Tag>{run.type}</Tag>
              <Tag>
                {run.backyard?.yards}
                yds
              </Tag>
              <Tag>{run.backyard?.place}</Tag>
            </>
            )}
            {run.type === 'FKT' && (
            <>
              <Tag>{run.type}</Tag>
              <Tag>{run.fkt?.type}</Tag>
            </>
            )}
            {run.type === 'Race' && (
            <>
              <Tag>{run.type}</Tag>
              <Tag>{toOrdinal(run.race?.place)}</Tag>
            </>
            )}
            {run.type === 'Adventure' && (
            <Tag>{run.type}</Tag>
            )}
          </td>
        </tr>
        <tr>
          <td className="border-r border-PRIMARY text-right pr-2">Name</td>
          <td className="pl-2 font-bold">{run.course}</td>
        </tr>
        <tr>
          <td className="border-r border-PRIMARY text-right pr-2">Place</td>
          <td className="pl-2">{run.location}</td>
        </tr>
        <tr>
          <td className="border-r border-PRIMARY text-right pr-2">Dist.</td>
          <td className="pl-2">
            {`${run.distance.amount} ${run.distance.unit}`}
          </td>
        </tr>
        <tr>
          <td className="border-r border-PRIMARY text-right pr-2">Time</td>
          <td className="pl-2">
            {`
              ${run.duration.days ? `${run.duration.days}d` : ''}
              ${run.duration.hours ? `${run.duration.hours}h` : ''}
              ${run.duration.minutes ? `${run.duration.minutes}m` : ''}
              ${run.duration.seconds ? `${run.duration.seconds}s` : ''}
            `}
          </td>
        </tr>
        <tr>
          <td className="border-r border-PRIMARY text-right pr-2">Link</td>
          <td className="pl-2">
            <Button href={run.link} hasLinkIcon isFullWidth>See result</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RunListItem;
