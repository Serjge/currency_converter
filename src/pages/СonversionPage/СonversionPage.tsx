import { ChangeEvent, ReactElement, useState } from 'react';

import { Text } from './style';

import { Select } from 'components';
import { currencies } from 'const';
import { useFetchConversion } from 'hook';
import { H1, Input, WrapperPage, WrapperSelect } from 'style';
import { limitingNumberDecimalPlaces } from 'utils';

const ZERO_ELEMENT_ARRAY = 0;
const FIRST_ELEMENT_ARRAY = 1;
const INITIAL_AMOUNT = '1';
const TWO_DECIMAL_PLACES = 2;

export const ConversionPage = (): ReactElement => {
  const [baseAmount, setBaseAmount] = useState<string>(INITIAL_AMOUNT);
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
    setBaseAmount(limitingNumberDecimalPlaces(value));
  };

  return (
    <WrapperPage>
      <H1>Currency Converter</H1>
      <WrapperSelect>
        I have
        <Select
          currencies={currencies}
          currentCurrency={fromCurrency}
          setCurrentCurrency={setFromCurrency}
        />
      </WrapperSelect>
      <Input width="200px" value={baseAmount} onChange={changeCurrencyFiled} />
      <WrapperSelect>
        <div>I need to get</div>
        <Select
          currencies={currencies}
          currentCurrency={toCurrency}
          setCurrentCurrency={setToCurrency}
        />
      </WrapperSelect>
      <Text>
        {currencyRequest &&
          (currencyRequest[toCurrency].value * Number(baseAmount)).toFixed(
            TWO_DECIMAL_PLACES,
          )}
      </Text>
      <div>{errorRequest}</div>
    </WrapperPage>
  );
};
