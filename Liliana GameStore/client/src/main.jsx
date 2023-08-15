import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './Redux/store.js';
import './index.css';
import './scss/style.scss';
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3001"; 
//axios.defaults.baseURL = "https://liliana-server.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} > 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>

)
