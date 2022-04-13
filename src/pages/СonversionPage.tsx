import { ChangeEvent, ReactElement, useState } from 'react';

import { Select } from 'components';
import { currencies } from 'const';
import { useFetchConversion } from 'hook';
import { limitingNumberDecimalPlaces } from 'utils/limitingNumberDecimalPlaces';

const ZERO_ELEMENT_ARRAY = 0;
const FIRST_ELEMENT_ARRAY = 1;
const INITIAL_AMOUNT = '1';

export const ConversionPage = (): ReactElement => {
  const [baseAmount, setBaseAmount] = useState<string>(INITIAL_AMOUNT);
  const [fromCurrency, setFromCurrency] = useState<string>(
    currencies[ZERO_ELEMENT_ARRAY],
  );
  const [toCurrency, setToCurrency] = useState<string>(currencies[FIRST_ELEMENT_ARRAY]);

  const { errorRequest, amountRequest } = useFetchConversion(
    fromCurrency,
    toCurrency,
    baseAmount,
  );

  const changeCurrencyFiled = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    if (!Number.isFinite(Number(value))) {
      return;
    }
    setBaseAmount(limitingNumberDecimalPlaces(value));
  };

  return (
    <div>
      <input value={baseAmount} onChange={changeCurrencyFiled} />
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
      <div>{amountRequest}</div>
      <div>{errorRequest}</div>
    </div>
  );
};
