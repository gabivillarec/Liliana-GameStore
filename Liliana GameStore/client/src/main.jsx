import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './Redux/store.js';
import './index.css';
import './scss/style.scss';

export const URL = "http://localhost:3001/LilianaGameStore/"; 
//export const URL = "https://liliana-server.onrender.com/LilianaGameStore/";



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} > 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

)