import axios from 'axios'
import { URL } from '../../../main';
export const createUser = async (create) =>{
    console.log(create)
    try {
        const response = await axios.post(`${URL}user` , create);
        return response.request.statusText
        
    } catch (error) {
        console.log(error.message)
        return error.message
    }

}

