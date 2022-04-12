import { ReactElement, useEffect, useState } from 'react';

import { Select } from 'components';

const currencies = ['USD', 'RUB', 'AUZ', 'BEL', 'LOG'];

export const App = (): ReactElement => {
  useEffect(() => {}, []);

  const [currency, setCurrency] = useState<string>('USD');

  return (
    <div style={{ marginTop: '200px' }}>
      <Select
        currencies={currencies}
        currentCurrency={currency}
        setCurrentCurrency={setCurrency}
      />
      <div>{currency}</div>
    </div>
  );
};
