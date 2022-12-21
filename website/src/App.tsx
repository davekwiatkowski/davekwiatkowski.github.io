import { FC, StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: FC = () => (
  <StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </StrictMode>
);

export default App;
