import { ReactElement } from 'react';

import { Item, WrapperItem } from 'components/listCurrenciesItem/style';
import { limitingNumberDecimalPlaces } from 'utils';

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
    <Item width="40%">{limitingNumberDecimalPlaces(String(value))}</Item>
  </WrapperItem>
);
