import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Privacy from './privacy';
import Contact from './contact';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/privacy' element={<Privacy />} />
      {/* <Route path='/translation' element={<Translation />} />
      <Route path='/blog' element={<h1>! ! ! !! BLOG !! ! ! ! </h1>} /> */}
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};
