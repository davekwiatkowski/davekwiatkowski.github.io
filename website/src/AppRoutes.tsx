import { FC } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostPageRedirect from './PostPageRedirect';

const AppRoutes: FC = () => (
  <Routes>
    <Route element={<Navigate to="/blog" replace />} path="/" />
    <Route element={<HomePage tab="blog" />} path="/blog" />
    <Route element={<HomePage tab="runs" />} path="/runs" />
    <Route element={<PostPage />} path="/blog/:slug" />
    <Route element={<PostPageRedirect />} path="/:slug" />
  </Routes>
);

export default AppRoutes;
