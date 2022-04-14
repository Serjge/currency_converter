import { AxiosResponse } from 'axios';

import { instance } from 'api';
import { DataType } from 'api/type';

export const API = {
  getConvert(baseCurrency: string): Promise<AxiosResponse<DataType, any>> {
    return instance.get<DataType>(`latest`, {
      params: {
        base_currency: baseCurrency,
        apikey: process.env.REACT_APP_API_KEY,
        currencies: 'USD,RUB,EUR,GBP,AUD,CAD,JPY,AMD,AED,BYR',
      },
    });
  },
};
