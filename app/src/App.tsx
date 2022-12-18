import { FC, StrictMode } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPostPage from "./pages/BlogPostPage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<BlogPostPage />} path="/:slug" />
    </Routes>
  );
};

const App: FC = () => {
  return (
    <StrictMode>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </StrictMode>
  );
};

export default App; 
