import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';

import { API } from 'api';

type UseFetchConversionReturnType = {
  amountRequest: number;
  errorRequest: string;
};

const INITIAL_AMOUNT = 0;

export const useFetchConversion = (
  from: string,
  to: string,
  amount: string,
): UseFetchConversionReturnType => {
  const [amountRequest, setAmountRequest] = useState<number>(INITIAL_AMOUNT);
  const [errorRequest, setErrorRequest] = useState<string>('');

  const fetchMyAPI = async (): Promise<void> => {
    try {
      const {
        data: { rateCurrency },
      } = await API.getConvert(from, to, amount);
      setAmountRequest(rateCurrency.amount);
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

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);

  return { amountRequest, errorRequest };
};
