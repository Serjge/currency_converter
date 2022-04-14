import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { GlobalStyle, theme } from 'style';

ReactDOM.render(
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </div>,
  document.getElementById('root'),
);
reportWebVitals();
