import { ReactElement } from 'react';

import { Header } from 'components';
import { Routers } from 'pages';
import { AppWrapper } from 'style';

export const App = (): ReactElement => (
  <AppWrapper>
    <Header />
    <Routers />
  </AppWrapper>
);
