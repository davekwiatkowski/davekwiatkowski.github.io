import { FC } from 'react';
import useRunListData from '../../util/data/useRunListData';
import LoadingSignal from '../common/LoadingSignal';
import RunListItem from './RunListItem';
import FadeIn from '../common/FadeIn';
import ScrollFade from '../common/ScrollFade';

const RunList: FC = () => {
  const runListData = useRunListData();

  return (
    <section className="w-full h-full" aria-label="Race results">
      <ScrollFade className="w-full h-full" showIndicator>
        <div className="flex flex-row flex-wrap w-full" role="list">
          {runListData ? (
            [...runListData]
              .sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
              )
              .map((run, index: number) => (
                <FadeIn
                  key={`${run.date}-${run.course}`}
                  delay={index * 60}
                  className="sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 w-full"
                >
                  <RunListItem
                    run={run}
                    index={runListData.length - index}
                  />
                </FadeIn>
              ))
          ) : (
            <LoadingSignal />
          )}
        </div>
      </ScrollFade>
    </section>
  );
};

export default RunList;
