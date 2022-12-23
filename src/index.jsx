import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './components/App';

// TODO: importar estilos css
import './styles/css/index.css';

// TODO: Si trabajamos con redux, creamos el store y aplicamos el middleware de redux saga

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<App />);
