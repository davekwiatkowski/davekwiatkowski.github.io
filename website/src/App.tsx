import { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: FC = () => (
  <HashRouter>
    <AppRoutes />
  </HashRouter>
);

export default App;
