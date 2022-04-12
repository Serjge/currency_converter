import { instance } from 'api';

type CurrencyType = {
  code: string;
  name: string;
  amount: number;
};

type convertType = {
  baseCurrency: CurrencyType;
  rateCurrency: CurrencyType;
  updatedDate: Date;
};

export const API = {
  getConvert(from: string, to: string, amount: string) {
    return instance.get<convertType>(`currency/${from}/${to}/${amount}`);
  },
};
