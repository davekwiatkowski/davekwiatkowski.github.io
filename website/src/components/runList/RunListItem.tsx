import { FC } from 'react';
import { IRunListItemData } from '../../util/data/useRunListData';
import toOrdinal from '../../util/toOrdinal';
import Tag from '../common/Tag';
import Button from '../common/button/Button';

const RunListItem: FC<{ index: number; run: IRunListItemData }> = ({ index, run }) => (
  <div key={index} className="w-full p-8 pb-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-TEXT_DE_EMP">
    <table className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-left table-fixed divide-TEXT_DE_EMP">
      <thead>
        <tr>
          <th className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-TEXT">
            {index.toString().padStart(3, '0')}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-TEXT_DE_EMP">
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
          <td>
            {`${run.course}`}
          </td>
        </tr>
        <tr>
          <td className="flex flex-wrap gap-1 pb-1 pt-1 text-xs sm:text-sm md:text-base lg:text-lg">
            {run.type === 'Backyard' && (
              <>
                <Tag>
                  {run.type}
                </Tag>
                <Tag>
                  {run.backyard?.yards}
                  yds
                </Tag>
                <Tag>
                  {run.backyard?.place}
                </Tag>
              </>
            )}
            {run.type === 'FKT' && (
              <>
                <Tag>
                  {run.type}
                </Tag>
                <Tag>
                  {run.fkt?.type}
                </Tag>
              </>
            )}
            {run.type === 'Race' && (
              <>
                <Tag>
                  {run.type}
                </Tag>
                <Tag>
                  {toOrdinal(run.race?.place)}
                </Tag>
              </>
            )}
            {run.type === 'Adventure' && (
              <Tag>
                {run.type}
              </Tag>
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
            <Button href={run.link} hasLinkIcon>
              See result
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RunListItem;
