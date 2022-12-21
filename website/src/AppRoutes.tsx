import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

const AppRoutes: FC = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<PostPage />} path="/:slug" />
  </Routes>
);

export default AppRoutes;
