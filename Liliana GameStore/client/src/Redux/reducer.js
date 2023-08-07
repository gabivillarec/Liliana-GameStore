import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, CLEAR_DETAIL  , GET_FAVORITES , GET_ADMIN_PRODUCTS} from "./action-type";

const initialState = {
    products: [],
    productsCopy: [],
    detail: {},
    favorites:[],
    adminProducts:[]
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products : action.payload,
                productsCopy: action.payload,
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
        default:
            return {...state}
    }
}

export default reducer;