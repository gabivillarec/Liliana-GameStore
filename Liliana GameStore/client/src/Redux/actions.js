import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL } from "./action-type";
import axios from 'axios'

//-------------------------------------------------------------------------------- GET ALL PRODUCTS --------------------------------------------------------------------------------//

export const getAllProducts = () => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/LilianaGameStore/products');
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload: response.data.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload:  'payload'
                })}
    }
}

//------------------------------------------------------------------------------------- DETAIL -------------------------------------------------------------------------------------//

export const getProductDetail = (id) => {
    try {
        const endpoint = `http://localhost:3001/LilianaGameStore/products/${id}`
        return async (dispatch) => {
        const { data } = await axios.get(endpoint)
            return dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: data,
            })}
    } catch (error) { 
        console.log(error.message)
    }
}

export const clearDetail = () => {
    return { type: CLEAR_DETAIL }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//