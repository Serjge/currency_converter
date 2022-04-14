export type CurrencyType = {
  [key: string]: { code: string; value: number };
};
export type MetaType = {
  last_updated_at: Date;
};

export type DataType = {
  data: CurrencyType;
  meta: MetaType;
};
