import { FC } from 'react';
import useMainLinkListData from '../../util/data/useMainLinkListData';
import LoadingSignal from '../common/LoadingSignal';
import MainLinkListItem from './MainLinkListItem';

const MainLinkList: FC = () => {
  const mainLinkListData = useMainLinkListData();

  return (
    <div className="text-base sm:text-lg flex gap-4 flex-row flex-wrap">
      {!mainLinkListData && <LoadingSignal />}
      {
        mainLinkListData
        && mainLinkListData
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((mainLinkListItemData) => (
            <MainLinkListItem key={mainLinkListItemData.title} data={mainLinkListItemData} />
          ))
      }
    </div>
  );
};

export default MainLinkList;
