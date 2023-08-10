import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL, GET_FAVORITES, GET_ADMIN_PRODUCTS, GET_CART_PRODUCTS, FILTER_SEARCHED, SET_FILTER_SEARCHED } from "./action-type";
import axios from 'axios'

//-------------------------------------------------------------------------------- GET ALL PRODUCTS --------------------------------------------------------------------------------//

export const getAllProducts = (filtros) => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get(`/LilianaGameStore/products?${filtros}`);
            console.log(response);
            
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload:{
                                data: response.data.data,
                                totalPages: response.data.totalPages,
                                currentPage: response.data.currentPage
                            }
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
        const endpoint = `/LilianaGameStore/products/${id}`
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

//-------------------------------------------------------------------------------------------FAVRITES---------------------------------------------------------------------------------------//

export const getFavorites = (id) => {
    return (dispatch) => { // No uses async/await aquí
      axios.get(`/LilianaGameStore/favorites/${id}`)
        .then((response) => {
          dispatch({
            type: GET_FAVORITES,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };

  //------------------------------------------------------------------------------------- GetAdmin ----------------------------------------------------------------------

  export const getAdminProducts = (filtros) => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get(`/LilianaGameStore/products?${filtros}`);
                return dispatch({
                    type: GET_ADMIN_PRODUCTS,
                    payload: response.data.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    payload:  'payload'
                })}
    }
}

  //------------------------------------------------------------------------------------- getAllCart ----------------------------------------------------------------------

  export const getAllCart = (idUser) => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get(`/LilianaGameStore/cart/${idUser}`);
                return dispatch({
                    type: GET_CART_PRODUCTS,
                    payload: response.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            console.log(error.message);
        }
    }
}


export const filterSearched = (filtroName, filtroValue) => {
    return (dispatch) => {
            return dispatch({
                type: FILTER_SEARCHED,
                payload: { nombreFiltro : filtroName,
                            valorFiltro : filtroValue },
        })}
}

export const setFilterSearched = () => {
    return (dispatch) => {
            return dispatch({
                type: SET_FILTER_SEARCHED,
                payload: { nombreFiltro : undefined,
                            valorFiltro : undefined },
        })}
}