import { FC, KeyboardEvent, ReactElement, useRef, useState } from 'react';

import { Item, Items, SelectBody, Title } from './style';

export type SelectType = {
  currencies: string[];
  currentCurrency: string;
  setCurrentCurrency: (value: string) => void;
};

const NEX_PREVIOUS_ITEM = 1;
const FIRST_TAB_INDEX = 0;

export const Select: FC<SelectType> = ({
  currencies,
  currentCurrency,
  setCurrentCurrency,
}): ReactElement => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [localCurrentCurrency, setLocalCurrentCurrency] =
    useState<string>(currentCurrency);

  const selectRef = useRef<HTMLDivElement>(null);

  document.onclick = (event: MouseEvent) => {
    if (!selectRef.current!.contains(event.target as Node)) {
      setIsCollapsed(false);
    }
  };

  const handleViewSelector = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const setCurrentCount = (value: string): void => {
    setCurrentCurrency(value);
    setLocalCurrentCurrency(value);
    setIsCollapsed(!isCollapsed);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    const index = currencies.indexOf(localCurrentCurrency);
    switch (e.key) {
      case 'ArrowDown':
        setIsCollapsed(true);
        if (currencies[index + NEX_PREVIOUS_ITEM]) {
          setLocalCurrentCurrency(currencies[index + NEX_PREVIOUS_ITEM]);
        }
        break;
      case 'ArrowUp':
        setIsCollapsed(true);
        if (currencies[index - NEX_PREVIOUS_ITEM]) {
          setLocalCurrentCurrency(currencies[index - NEX_PREVIOUS_ITEM]);
        }
        break;
      case 'Enter':
        setIsCollapsed(false);
        setCurrentCurrency(localCurrentCurrency);
        break;
      case 'Escape':
        setIsCollapsed(false);
        setLocalCurrentCurrency(currentCurrency);
        break;
      default:
    }
  };

  const selectElement = currencies.map(currency => (
    <Item
      key={currency}
      isCurrentCount={localCurrentCurrency === currency}
      onClick={() => setCurrentCount(currency)}
    >
      {currency}
    </Item>
  ));

  return (
    <SelectBody id="select" ref={selectRef} onKeyUp={onKeyUp}>
      <Items isActive={isCollapsed}>{isCollapsed && selectElement}</Items>
      <Title onClick={handleViewSelector} tabIndex={FIRST_TAB_INDEX}>
        {localCurrentCurrency}
      </Title>
    </SelectBody>
  );
};
