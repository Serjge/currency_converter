import { ReactElement } from 'react';

import { Item, WrapperItem } from './style';

const FOUR_DECIMAL_PLACES = 4;
type ListCurrenciesItemPropsType = {
  value: number;
  code: string;
};

export const ListCurrenciesItem = ({
  code,
  value,
}: ListCurrenciesItemPropsType): ReactElement => (
  <WrapperItem>
    <Item>{code}</Item>
    <Item width="40%">{value.toFixed(FOUR_DECIMAL_PLACES)}</Item>
  </WrapperItem>
);
