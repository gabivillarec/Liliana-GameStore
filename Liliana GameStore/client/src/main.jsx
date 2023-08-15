import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import store from './Redux/store.js';
import './index.css';
import './scss/style.scss';

<<<<<<< HEAD
axios.defaults.baseURL = "http://localhost:3001"; 
//axios.defaults.baseURL = "https://liliana-server.onrender.com";
=======
export const URL = "http://localhost:3001/LilianaGameStore/"; 
//export const URL = "https://liliana-server.onrender.com/LilianaGameStore/";


>>>>>>> 7156349f74e95d5b135fe647e812628810b10a9d

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store} > 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

)