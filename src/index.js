import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { BaseCSS } from 'styled-bootstrap-grid';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BaseCSS />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
