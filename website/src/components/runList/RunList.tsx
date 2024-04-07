import { FC } from 'react';
import useRunListData from '../../util/data/useRunListData';
import LoadingSignal from '../common/LoadingSignal';
import RunListItem from './RunListItem';

const RunList: FC = () => {
  const runListData = useRunListData();

  return (
    <div className="flex flex-row flex-wrap w-full pb-4">
      {runListData ? (
        runListData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((run, index: number) => (
            <RunListItem
              key={run.date}
              run={run}
              index={runListData.length - index}
            />
          ))
      ) : (
        <LoadingSignal />
      )}
    </div>
  );
};

export default RunList;
