import { ReactElement, useEffect, useState } from 'react';

import { API } from 'api';
import { Select } from 'components';
import { currencies } from 'const';

const ZERO_ELEMENT_ARRAY = 0;
const FIRST_ELEMENT_ARRAY = 1;

export const ConversionPage = (): ReactElement => {
  const [amount, setAmount] = useState<number>();
  const [baseAmount, setBaseAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>(
    currencies[ZERO_ELEMENT_ARRAY],
  );
  const [toCurrency, setToCurrency] = useState<string>(currencies[FIRST_ELEMENT_ARRAY]);

  useEffect(() => {
    API.getConvert(fromCurrency, toCurrency, baseAmount).then(res => {
      setAmount(res.data.rateCurrency.amount);
    });
  }, [fromCurrency, toCurrency, baseAmount]);

  return (
    <div>
      <input
        type="number"
        value={baseAmount}
        onChange={e => setBaseAmount(e.currentTarget.value)}
      />
      <div>
        <Select
          currencies={currencies}
          currentCurrency={fromCurrency}
          setCurrentCurrency={setFromCurrency}
        />
      </div>
      <div>
        <Select
          currencies={currencies}
          currentCurrency={toCurrency}
          setCurrentCurrency={setToCurrency}
        />
      </div>
      <div>{amount}</div>
    </div>
  );
};
