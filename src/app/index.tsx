import { Suspense } from 'react';

import { TranslationProvider } from 'i18nano';
import { BrowserRouter } from 'react-router-dom';

import { translations } from '@/i18n/index';
import { Footer, Header } from '@/widgets';

import { Routing } from '../pages';

import './index.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <TranslationProvider language='en' translations={translations}>
            <Header />
            <Routing />
            <Footer />
          </TranslationProvider>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
