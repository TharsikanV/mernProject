import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import {Provider} from 're'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

