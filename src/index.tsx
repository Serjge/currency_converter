import React from 'react';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from 'App';
import reportWebVitals from 'reportWebVitals';
import { GlobalStyle, theme } from 'style';

ReactDOM.render(
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </div>,
  document.getElementById('root'),
);
reportWebVitals();
