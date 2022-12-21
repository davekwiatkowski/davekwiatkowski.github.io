import { FC, useCallback } from 'react';
import { IRunListItemData } from '../../util/data/useRunListData';
import toOrdinal from '../../util/toOrdinal';
import Tag from '../common/Tag';

const RunListItem: FC<{ index: number; run: IRunListItemData }> = ({ index, run }) => {
  const handleClick = useCallback(() => {
    window.open(run.link);
  }, [run.link]);

  return (
    <div key={index} className="w-full pb-4 pr-4 sm:w-1/2 lg:w-1/3">
      <table className="w-full text-sm text-left divide-y table-fixed divide-stone-300">
        <thead>
          <tr>
            <th className="w-12 font-light">{index}</th>
            <th className={`italic text-black ${'font-light'}`}>{run.date}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-300">
          <tr>
            <td className="mt-1 mb-1 font-light">Type</td>
            <td className="flex flex-wrap gap-1 pr-2 mt-1 mb-1">
              {run.type === 'Backyard' && (
                <>
                  <Tag className="bg-sky-200">{run.type}</Tag>
                  <Tag className="bg-sky-100">
                    {run.backyard?.yards}
                    {' '}
                    yards
                  </Tag>
                  <Tag className="bg-sky-50">{run.backyard?.place}</Tag>
                </>
              )}
              {run.type === 'FKT' && (
                <>
                  <Tag className="bg-fuchsia-200">{run.type}</Tag>
                  <Tag className="bg-fuchsia-100">{run.fkt?.type}</Tag>
                </>
              )}
              {run.type === 'Race' && (
                <>
                  <Tag className="bg-red-200">{run.type}</Tag>
                  <Tag className="bg-red-100">{toOrdinal(run.race?.place)}</Tag>
                </>
              )}
            </td>
          </tr>
          <tr>
            <td className="font-light">Name</td>
            <td className="pr-2">{run.course}</td>
          </tr>
          <tr>
            <td className="pr-2 font-light">Place</td>
            <td className="pr-2">{run.location}</td>
          </tr>
          <tr>
            <td className="pr-2 font-light">Dist.</td>
            <td className="pr-2">
              {`${run.distance.amount} ${run.distance.unit}`}
            </td>
          </tr>
          <tr>
            <td className="pr-2 font-light">Time</td>
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
            <td className="font-light">Link</td>
            <td
              className="flex cursor-pointer hover:bg-stone-100"
              onClick={handleClick}
            >
              <div>
                <span className="underline">See result</span>
                <span className="ml-1">→</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RunListItem;
