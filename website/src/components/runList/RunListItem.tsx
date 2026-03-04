import { FC } from 'react';
import IRunListItemData from '../../util/data/IRunListItemData';
import toOrdinal from '../../util/toOrdinal';
import Tag from '../common/Tag';
import Button from '../common/button/Button';
import Marquee from '../common/Marquee';

const formatDuration = (d: IRunListItemData['duration']): string => `${d.days ? `${d.days}d ` : ''}${d.hours ? `${d.hours}h ` : ''}${d.minutes ? `${d.minutes}m ` : ''}${d.seconds ? `${d.seconds}s` : ''}`.trim();

const RunListItem: FC<{ index: number; run: IRunListItemData }> = ({ index, run }) => (
  <article className="w-full px-4 py-3 sm:p-5 sm:px-8 border-b border-BORDER" role="listitem">
    <div className="w-full text-sm text-left">
      <div className="flex items-baseline gap-2 sm:block mb-1 sm:mb-3">
        <div className="text-lg sm:text-5xl font-HEADING font-light text-TEXT tracking-tight" aria-hidden="true">
          {index.toString().padStart(3, '0')}
        </div>
        <Marquee className="text-xs uppercase tracking-widest font-medium text-TEXT_DE_EMP sm:hidden">
          <time>{run.date}</time>
        </Marquee>
      </div>
      <div className="space-y-0.5 sm:space-y-1.5 text-TEXT_DE_EMP overflow-hidden">
        <Marquee className="text-xs uppercase tracking-widest font-medium text-TEXT_DE_EMP hidden sm:block">
          <time>{run.date}</time>
        </Marquee>
        <Marquee className="text-sm sm:text-base text-TEXT font-medium">
          {run.course}
        </Marquee>
        <Marquee className="text-xs sm:text-sm">
          {run.location}
        </Marquee>
        <Marquee className="py-0.5">
          <div className="flex flex-nowrap gap-1.5" role="list" aria-label="Tags">
            {run.type === 'Backyard' && (
              <>
                <Tag>{run.type}</Tag>
                <Tag>
                  {run.backyard?.yards}
                  {' yds'}
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
          </div>
        </Marquee>
        <Marquee className="text-xs sm:text-sm sm:hidden">
          {`${run.distance.amount} ${run.distance.unit} · ${formatDuration(run.duration)}`}
        </Marquee>
        <Marquee className="text-xs sm:text-sm hidden sm:block">
          {`${run.distance.amount} ${run.distance.unit}`}
        </Marquee>
        <Marquee className="text-xs sm:text-sm hidden sm:block">
          {formatDuration(run.duration)}
        </Marquee>
        <div className="pt-0.5">
          <Button href={run.link} hasLinkIcon>
            See result
          </Button>
        </div>
      </div>
    </div>
  </article>
);

export default RunListItem;
