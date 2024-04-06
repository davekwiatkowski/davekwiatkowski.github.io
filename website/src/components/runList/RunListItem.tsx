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
          <th className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
            {index.toString().padStart(3, '0')}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-PRIMARY">
        <tr>
          <td>
            {run.date}
          </td>
        </tr>
        <tr>
          <td>
            {run.location}
          </td>
        </tr>
        <tr>
          <td>{`${run.course}`}</td>
        </tr>
        <tr>
          <td className="flex flex-wrap gap-1 pb-2 pt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
          <td>
            {`${run.distance.amount} ${run.distance.unit}`}
          </td>
        </tr>
        <tr>
          <td>
            {`
              ${run.duration.days ? `${run.duration.days}d` : ''}
              ${run.duration.hours ? `${run.duration.hours}h` : ''}
              ${run.duration.minutes ? `${run.duration.minutes}m` : ''}
              ${run.duration.seconds ? `${run.duration.seconds}s` : ''}
            `}
          </td>
        </tr>
        <tr>
          <td>
            <Button href={run.link} hasLinkIcon>See result</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RunListItem;
