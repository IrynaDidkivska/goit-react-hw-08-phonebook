import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';
import { Global } from 'styles/Global';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { App } from 'App';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-08-phonebook">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
        <ToastContainer autoClose={1800} />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
