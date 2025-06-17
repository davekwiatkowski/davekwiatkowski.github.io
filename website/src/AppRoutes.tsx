import { FC } from 'react';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPageRedirect from './PostPageRedirect';
import RouteName from './constants/Route';
import Redirect from './components/common/Redirect';
import urlConstants from './constants/urlConstants';

const AppRoutes: FC = () => (
  <Routes>
    <Route element={<Navigate to={`/${RouteName.About}`} replace />} path="/" />
    <Route element={<HomePage tab={RouteName.About} />} path={`/${RouteName.About}`} />
    <Route element={<HomePage tab={RouteName.Blog} />} path={`/${RouteName.Blog}`} />
    <Route element={<HomePage tab={RouteName.Runs} />} path={`/${RouteName.Runs}`} />
    <Route element={<Redirect url={urlConstants.BLOG_SITE} />} path={`/${RouteName.Blog}/:slug`} />
    <Route element={<PostPageRedirect />} path="/:slug" />
  </Routes>
);

export default AppRoutes;
