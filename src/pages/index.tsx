import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Privacy from './privacy';
import Contact from './contact';

export const Routing = () => {
  return (
    <Routes>
      <Route path='The-North-Website/' element={<Home />} />
      <Route path='The-North-Website/privacy' element={<Privacy />} />
      {/* <Route path='/translation' element={<Translation />} />
      <Route path='/blog' element={<h1>! ! ! !! BLOG !! ! ! ! </h1>} /> */}
      <Route path='The-North-Website/contact' element={<Contact />} />
    </Routes>
  );
};
