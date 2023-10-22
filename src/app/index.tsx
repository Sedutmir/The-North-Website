import { Routing } from '../pages';

import { withProviders } from './providers';

import './index.css';

const App = () => {
  return <Routing />;
};

const AppWithProiders = withProviders(App);

export default AppWithProiders;
