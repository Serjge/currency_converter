import { CurrencyType, DataType, MetaType } from 'api/type';

const mockData: CurrencyType = {
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

const mockMeta: MetaType = {
  last_updated_at: new Date(),
};
const state: DataType = { data: mockData, meta: mockMeta };

export const getCurrency = async (baseCurrency: string): Promise<DataType> => {
  console.log(baseCurrency);
  return Promise.resolve(state);
};
