import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './redux/store';
import './index.css'
import './scss/style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} > 
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>,
)
