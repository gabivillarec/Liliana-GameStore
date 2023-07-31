import { GET } from "./action-type";

import axios from 'axios'

export const get = () => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(response)
            return dispatch({ type: GET , payload: response.data.results })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            return dispatch({ type: GET, payload:  'payload'})
        }
    }
}

