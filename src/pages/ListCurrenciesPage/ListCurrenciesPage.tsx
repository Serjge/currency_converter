import { ReactElement, useState } from 'react';

import { WrapperTable } from './style';

import { Select, ListCurrenciesItem } from 'components';
import { currencies } from 'const';
import { useFetchConversion } from 'hook';
import { H1, WrapperPage, WrapperSelect } from 'style';

const ZERO_ELEMENT_ARRAY = 0;

export const ListCurrenciesPage = (): ReactElement => {
  const [baseCurrency, setBaseCurrency] = useState<string>(
    currencies[ZERO_ELEMENT_ARRAY],
  );

  const { errorRequest, currencyRequest } = useFetchConversion(baseCurrency);

  const filterListCurrencies =
    currencyRequest &&
    Object.values(currencyRequest).filter(({ code }) => code !== baseCurrency);

  const currency = filterListCurrencies?.map(({ value, code }) => (
    <ListCurrenciesItem key={code} value={value} code={code} />
  ));

  return (
    <WrapperPage>
      <H1>List of currencies</H1>
      <WrapperSelect>
        Base currency
        <Select
          currencies={currencies}
          currentCurrency={baseCurrency}
          setCurrentCurrency={setBaseCurrency}
        />
      </WrapperSelect>
      <WrapperTable>{currency}</WrapperTable>
      <div>{errorRequest}</div>
    </WrapperPage>
  );
};
