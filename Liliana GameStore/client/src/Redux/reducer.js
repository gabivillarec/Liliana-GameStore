import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL, GET_FAVORITES, GET_ADMIN_PRODUCTS, GET_CART_PRODUCTS, FILTER_SEARCHED, SET_FILTER_SEARCHED ,GET_ALL_USERS, GET_DETAIL_USERS,GET_MERCADO_ORDER, GET_USER_ORDER ,GET_ALL_REVIEW} from "./action-type";

const initialState = {
    products: [],
    productsCopy: [],
    detail: {},
    favorites:[],
    adminProducts:[],
    cartProducts:[],
    searchedProductList:{},
    currentPage: 1,
    totalPages: 1,
    usersAdmin:[],
    userDetail:[],
    mercadoOrder:'',
    AdminOrder:[],
    adminReview:[]

}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products : action.payload.data,
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
        case GET_ALL_USERS:
            return{
                ...state,
                usersAdmin:action.payload
            }
        case GET_DETAIL_USERS:
            return{
                ...state,
                userDetail:action.payload
            }
        case GET_MERCADO_ORDER:
            return{
                ...state,
                mercadoOrder:action.payload
            }
        case GET_USER_ORDER:
            return{
                ...state,
                AdminOrder:action.payload
            }
        case GET_ALL_REVIEW:
            return{
                ...state,
                adminReview:action.payload
            }
        default:
            return {...state}
    }
}

export default reducer;