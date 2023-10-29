import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Footer, Header } from '@/widgets';

import { Routing } from '../pages';

import './index.css';
import { Loader } from '@/shared/components';
import { i18n } from '@/shared/i18n';
import { I18nextProvider } from 'react-i18next';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Header />
            <Routing />
            <Footer />
          </Suspense>
        </BrowserRouter>
      </I18nextProvider>
    </>
  );
};

export default App;
