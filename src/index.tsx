import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.css';
import Home from 'pages/Home';
import Menu from 'pages/Menu';

const componenteAtual = window.location.pathname === '/' ? <Home/> : <Menu/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {componenteAtual}
  </React.StrictMode>
);

