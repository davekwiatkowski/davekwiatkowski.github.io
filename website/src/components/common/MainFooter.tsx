import { FC } from 'react';
import MainLinkList from '../mainLinkList/MainLinkList';

const MainFooter: FC = () => (
  <div className="w-full bg-white p-8 flex justify-center">
    <div className="max-w-screen-2xl w-full">
      <MainLinkList />
    </div>
  </div>
);

export default MainFooter;
