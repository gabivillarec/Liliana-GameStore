import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL, GET_FAVORITES, GET_CART_PRODUCTS, FILTER_SEARCHED, SET_FILTER_SEARCHED , GET_ALL_USERS ,GET_DETAIL_USERS ,GET_MERCADO_ORDER ,GET_ALL_REVIEW} from "./action-type";
import axios from 'axios'
import { URL } from "../main";

//-------------------------------------------------------------------------------- GET ALL PRODUCTS --------------------------------------------------------------------------------//

export const getAllProducts = (filtros) => {  
   //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {

            let response = await axios.get(`${URL}products?${filtros}`);

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
        const endpoint = `${URL}products/${id}`
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
      axios.get(`${URL}favorites/${id}`)
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
            let response = await axios.get(`${URL}products?${filtros}`);
                return dispatch({
                    type: GET_DETAIL_USERS,
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
            let response = await axios.get(`${URL}cart/${idUser}`);
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


  //------------------------------------------------------------------------------------- getAllUsers ---------------------------------------------------------------

  export const getAllUsers = () => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get(`${URL}user/`);
                return dispatch({
                    type: GET_ALL_USERS,
                    payload: response.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            console.log(error.message);
        }
    }
}

  //------------------------------------------------------------------------------------- getDetailUser ---------------------------------------------------------------

  export const getDetailUser = (idUser) => {       //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            let response = await axios.get(`${URL}user/${idUser}`);
                
                return dispatch({
                    type: GET_DETAIL_USERS,
                    payload: response.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            console.log(error.message);
        }
    }
}

  //------------------------------------------------------------------------------------- getMercadoOrder ------------------------------------------------------------

export const getMercadoOrder = (JsonBody) => {  
         //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL}order/`, JsonBody);
                return dispatch({
                    type: GET_MERCADO_ORDER,
                    payload: response.data
                })    // type indica la action a ejecutar payload pasa la info al estado global
        } catch (error) {
            console.log(error.message);
        }
    }
}  
//------------------------------------------------------------------------------------- getAllOrder ----------------------------------------------------------
export const getAllOrder = () => {  
    //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
    return (dispatch) => { // No uses async/await aquí
        axios.get(`${URL}order`)
          .then((response) => {
            dispatch({
              type: `GET_USER_ORDER`,
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
    };

    //------------------------------------------------------------------------------------- getAllReview ----------------------------------------------------------
    export const getAllReview = () => {  
        //funcion que trae si no hay o server no esta activo devuelve un array con 8 dogs vacios
        return (dispatch) => { // No uses async/await aquí
            axios.get(`${URL}review`)
              .then((response) => {
                console.log(response)
                dispatch({
                  type: GET_ALL_REVIEW,
                  payload: response.data,
                });
              })
              .catch((error) => {
                console.log(error.message);
              });
          };
        };