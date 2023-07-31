import { GET } from "./action-type";

const initialState = {
    estado:  []
}

const reducer = (state = initialState , action ) => {
    switch(action.type){
        case GET:
            return{
                ...state,
                estado : action.payload
            }
        default:
            return {...state}
    }
}

export default reducer;