import { FC, StrictMode } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import HelmetMetaData from './components/HelmetMetaData';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path='/' />
      <Route element={<BlogPostPage />} path='/:slug' />
    </Routes>
  );
};

const App: FC = () => {
  return (
    <StrictMode>
      <HashRouter>
        <HelmetMetaData />
        <AppRoutes />
      </HashRouter>
    </StrictMode>
  );
};

export default App;
