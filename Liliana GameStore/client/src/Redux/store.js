import { createStore , applyMiddleware , compose } from 'redux';
import reducer from './reducer';
import  thunkMiddleware  from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // sirve para conectar con extencion de navegador => REDUX DEVTOOLS 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // sirve para poder hacer peticiones a la API
    )

export default store;