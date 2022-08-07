import { FC, StrictMode, useContext, useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';
import HelmetMetaData from './components/HelmetMetaData';
import CursorProvider, {
  CursorContext,
} from './components/cursor/CursorProvider';

const AppRoutes: FC = () => {
  const { setIsHovering } = useContext(CursorContext);

  const location = useLocation();

  useEffect(() => {
    setIsHovering(false);
  }, [location, setIsHovering]);

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
        <CursorProvider>
          <AppRoutes />
        </CursorProvider>
      </HashRouter>
    </StrictMode>
  );
};

export default App;
