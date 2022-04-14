import { useLayoutEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { getCurrency } from 'api/mock';
import { CurrencyType } from 'api/type';

type UseFetchConversionReturnType = {
  currencyRequest: CurrencyType | undefined;
  errorRequest: string;
};

export const useFetchConversion = (
  baseCurrency: string,
): UseFetchConversionReturnType => {
  const [currencyRequest, setCurrencyRequest] = useState<CurrencyType>();
  const [errorRequest, setErrorRequest] = useState<string>('');

  const fetchMyAPI = async (): Promise<void> => {
    try {
      // const {
      //   data: { data },
      // } = await API.getConvert(baseCurrency);
      const { data } = await getCurrency(baseCurrency);

      setCurrencyRequest(data);
    } catch (err) {
      const { message, response } = err as AxiosError;
      const responseMessage = response?.data.message;
      const status = response?.status;

      if (!status) {
        setErrorRequest(message);
      }
      setErrorRequest(responseMessage);
    }
  };

  useLayoutEffect(() => {
    fetchMyAPI();
  }, []);

  return { currencyRequest, errorRequest };
};
