import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Footer, Header } from '@/widgets';

import { Routing } from '../pages';

import './index.css';
import { Loader } from '@/shared/components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <Routing />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
