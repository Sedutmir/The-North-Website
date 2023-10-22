import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./home'));
// const Privacy = lazy(() => import('./privacy'));
// const Translation = lazy(() => import('./translation'));
// const Contact = lazy(() => import('./contact'));

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/privacy' element={<Privacy />} />
      <Route path='/translation' element={<Translation />} />
      <Route path='/blog' element={<h1>! ! ! !! BLOG !! ! ! ! </h1>} />
      <Route path='/contact' element={<Contact />} /> */}
    </Routes>
  );
};
