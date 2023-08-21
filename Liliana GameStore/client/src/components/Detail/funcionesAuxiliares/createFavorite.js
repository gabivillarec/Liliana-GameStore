import axios from 'axios'
import { URL } from "../../../main";

export const createFavorite = async(userId , productId) =>{
    const URLfav = `${URL}favorites`
    let objet = {
        product:productId,
        userId:userId
    }
    try {
        
        let response= await axios.post(URLfav, objet)
        return response.data
    } catch (error) {
        console.log(error.message)
        return error.message
    }
}