import { ReactElement } from 'react';

import { ListCurrenciesPage } from 'pages';

export const App = (): ReactElement => (
  <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
    <ListCurrenciesPage />
  </div>
);
