import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { HeaderButton, HeaderWrapper } from './style';

import { Path } from 'enum';

export const Header = (): ReactElement => (
  <HeaderWrapper>
    <NavLink to={Path.Converse}>
      {({ isActive }) => <HeaderButton isActive={isActive}>Converse</HeaderButton>}
    </NavLink>
    <NavLink to={Path.Currencies}>
      {({ isActive }) => <HeaderButton isActive={isActive}>Currencies</HeaderButton>}
    </NavLink>
  </HeaderWrapper>
);
