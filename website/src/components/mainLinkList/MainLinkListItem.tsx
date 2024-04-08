import { FC } from 'react';
import { IMainLinkItemData } from '../../util/data/useMainLinkListData';
import Button from '../common/button/Button';

const MainLinkListItem: FC<{ data: IMainLinkItemData }> = ({ data }) => {
  const { title } = data;

  return (
    <Button className="text-sm" hasLinkIcon key={title} href={data.url}>
      {title}
    </Button>
  );
};

export default MainLinkListItem;
