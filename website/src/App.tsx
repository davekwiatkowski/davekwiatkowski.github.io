import { FC, StrictMode } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';

const AppRoutes: FC = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<BlogPostPage />} path="/:slug" />
  </Routes>
);

const App: FC = () => (
  <StrictMode>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </StrictMode>
);

export default App;
