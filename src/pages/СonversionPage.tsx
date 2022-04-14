import { ChangeEvent, ReactElement, useState } from 'react';

import { Select } from 'components';
import { currencies } from 'const';
import { useFetchConversion } from 'hook';
import { limitingNumberDecimalPlaces } from 'utils';

const ZERO_ELEMENT_ARRAY = 0;
const FIRST_ELEMENT_ARRAY = 1;
const INITIAL_AMOUNT = 1;

export const ConversionPage = (): ReactElement => {
  const [baseAmount, setBaseAmount] = useState<number>(INITIAL_AMOUNT);
  const [fromCurrency, setFromCurrency] = useState<string>(
    currencies[ZERO_ELEMENT_ARRAY],
  );
  const [toCurrency, setToCurrency] = useState<string>(currencies[FIRST_ELEMENT_ARRAY]);

  const { errorRequest, currencyRequest } = useFetchConversion(fromCurrency);

  const changeCurrencyFiled = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    if (!Number.isFinite(Number(value))) {
      return;
    }
    setBaseAmount(Number(limitingNumberDecimalPlaces(value)));
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
      <div>{currencyRequest && currencyRequest[toCurrency].value * baseAmount}</div>
      <div>{errorRequest}</div>
    </div>
  );
};
