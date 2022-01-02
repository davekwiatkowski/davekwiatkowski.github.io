import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPostPage from './pages/BlogPostPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<BlogPostPage />} path='/:slug' />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
