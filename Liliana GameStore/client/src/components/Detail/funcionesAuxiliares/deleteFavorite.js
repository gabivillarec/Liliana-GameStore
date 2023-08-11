import axios from 'axios'
import { URL } from "../../../main";

export const deleteFavorite = async( productId) =>{
    const URLfav = `${URL}favorites/${productId}`
    try {
        let response= await axios.delete(URLfav)
        return response.data
    } catch (error) {
        return error.message
    }
}