import { ReactElement, useState } from 'react';

import { WrapperTable } from './style';

import { Select, ListCurrenciesItem } from 'components';
import { currencies } from 'const';
import { useFetchConversion } from 'hook';
import { H1, WrapperPage, WrapperSelect } from 'style';

const ZERO_ELEMENT_ARRAY = 0;

export const ListCurrenciesPage = (): ReactElement => {
  const [fromCurrency, setFromCurrency] = useState<string>(
    currencies[ZERO_ELEMENT_ARRAY],
  );

  const { errorRequest, currencyRequest } = useFetchConversion(fromCurrency);

  return (
    <WrapperPage>
      <H1>Currency Converter</H1>
      <WrapperSelect>
        Base currency
        <Select
          currencies={currencies}
          currentCurrency={fromCurrency}
          setCurrentCurrency={setFromCurrency}
        />
      </WrapperSelect>
      <WrapperTable>
        {currencyRequest &&
          Object.values(currencyRequest).map(({ value, code }) => (
            <ListCurrenciesItem value={value} code={code} key={code} />
          ))}
      </WrapperTable>
      <div>{errorRequest}</div>
    </WrapperPage>
  );
};
