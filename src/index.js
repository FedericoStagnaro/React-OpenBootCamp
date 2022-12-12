import React from 'react';
import ReactDOM from 'react-dom/client';

// añadimos bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// estilos propios deben ir debajo de bootstrap
// import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import RoutingFinal from './RoutingFinal';


import store  from './store/config/storeConfig';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RoutingFinal />
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
