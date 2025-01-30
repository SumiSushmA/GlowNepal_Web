import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AdminContextProvider from './context/AdminContext.jsx';
import AppContextProvider from './context/AppContext.jsx';
import StylistContextProvider from './context/StylishContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <StylistContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </StylistContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
);
