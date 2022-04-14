import { CurrencyType, DataType, MetaType } from 'api/type';

const mockDataAED: CurrencyType = {
  AED: { code: 'AED', value: 1 },
  AUD: { code: 'AUD', value: 0.365378 },
  BYR: { code: 'BYR', value: 5336.019493 },
  CAD: { code: 'CAD', value: 0.342134 },
  EUR: { code: 'EUR', value: 0.249856 },
  GBP: { code: 'GBP', value: 0.207511 },
  JPY: { code: 'JPY', value: 34.134209 },
  RUB: { code: 'RUB', value: 22.440279 },
  USD: { code: 'USD', value: 0.272246 },
};

const mockDataUSD: CurrencyType = {
  AED: { code: 'AED', value: 3.67315 },
  AMD: { code: 'AMD', value: 472.44138 },
  AUD: { code: 'AUD', value: 1.34209 },
  BYR: { code: 'BYR', value: 19600 },
  CAD: { code: 'CAD', value: 1.25671 },
  EUR: { code: 'EUR', value: 0.91776 },
  GBP: { code: 'GBP', value: 0.76222 },
  JPY: { code: 'JPY', value: 125.38007 },
  RUB: { code: 'RUB', value: 82.42651 },
  USD: { code: 'USD', value: 1 },
};

const mockDataCAD: CurrencyType = {
  AED: { code: 'AED', value: 2.92283 },
  AMD: { code: 'AMD', value: 375.935084 },
  AUD: { code: 'AUD', value: 1.067939 },
  BYR: { code: 'BYR', value: 15596.279173 },
  CAD: { code: 'CAD', value: 1 },
  EUR: { code: 'EUR', value: 0.730288 },
  GBP: { code: 'GBP', value: 0.60652 },
  JPY: { code: 'JPY', value: 99.768499 },
  RUB: { code: 'RUB', value: 65.589126 },
  USD: { code: 'USD', value: 0.795729 },
};

const mockMeta: MetaType = {
  last_updated_at: new Date(),
};

export const getCurrency = async (baseCurrency: string): Promise<DataType> => {
  if (baseCurrency === 'AED') {
    return Promise.resolve({ data: mockDataAED, meta: mockMeta });
  }
  if (baseCurrency === 'CAD') {
    return Promise.resolve({ data: mockDataCAD, meta: mockMeta });
  }
  return Promise.resolve({ data: mockDataUSD, meta: mockMeta });
};
