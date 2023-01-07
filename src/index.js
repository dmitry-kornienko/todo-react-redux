import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NavLinksProvider } from './context/NavLinksContext';
import store from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavLinksProvider>
       <App />
      </NavLinksProvider>
    </Provider>
  </BrowserRouter>
);