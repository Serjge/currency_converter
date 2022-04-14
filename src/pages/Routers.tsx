import { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enum';
import { ListCurrenciesPage, ConversionPage } from 'pages';
import { H1 } from 'style';

export const Routers = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Navigate to={Path.Converse} />} />
    <Route path={Path.Currencies} element={<ListCurrenciesPage />} />
    <Route path={Path.Converse} element={<ConversionPage />} />
    <Route path={Path.Page404} element={<H1>Page 404</H1>} />
  </Routes>
);
