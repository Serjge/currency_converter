import { instance } from 'api';

export const API = {
  getSymbols() {
    return instance.get(`symbols`);
  },
  getConvert(from: string, to: string, amount: string) {
    return instance.get('convert', { params: { from, to, amount } });
  },
};
