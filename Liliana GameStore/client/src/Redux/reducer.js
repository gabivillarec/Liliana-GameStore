import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL, GET_FAVORITES, GET_ADMIN_PRODUCTS, GET_CART_PRODUCTS, FILTER_SEARCHED, SET_FILTER_SEARCHED} from "./action-type";

const initialState = {
    products: [],
    productsCopy: [],
    detail: {},
    favorites:[],
    adminProducts:[],
    cartProducts:[],
    searchedProductList:{},
    currentPage: 1,
    totalPages: 1
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products : action.payload.data,
                productsCopy: action.payload.data,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                detail: action.payload,
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: {}
            }
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case GET_ADMIN_PRODUCTS:
            return{
                ...state,
                adminProducts: action.payload
            }
        case GET_CART_PRODUCTS:
            return{
                ...state,
                cartProducts: action.payload
            }
        case FILTER_SEARCHED:
            return{
                ...state,
                searchedProductList: action.payload
            }
        case SET_FILTER_SEARCHED:
            return{
                ...state,
                searchedProductList: action.payload
            }
        default:
            return {...state}
    }
}

export default reducer;