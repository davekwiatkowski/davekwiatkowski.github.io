import { FC } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostPageRedirect from './PostPageRedirect';
import RouteName from './constants/Route';

const AppRoutes: FC = () => (
  <Routes>
    <Route element={<Navigate to={`/${RouteName.About}`} replace />} path="/" />
    <Route element={<HomePage tab={RouteName.About} />} path={`/${RouteName.About}`} />
    <Route element={<HomePage tab={RouteName.Blog} />} path={`/${RouteName.Blog}`} />
    <Route element={<HomePage tab={RouteName.Runs} />} path={`/${RouteName.Runs}`} />
    <Route element={<PostPage />} path={`/${RouteName.Blog}/:slug`} />
    <Route element={<PostPageRedirect />} path="/:slug" />
  </Routes>
);

export default AppRoutes;
