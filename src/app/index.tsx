import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Footer, Header } from '@/widgets';

import { Routing } from '../pages';

import './index.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <Header />
          <Routing />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
