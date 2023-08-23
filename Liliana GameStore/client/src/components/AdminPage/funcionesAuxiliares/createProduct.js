import axios from 'axios'
import { URL } from '../../../main';

const createProduct = async (create) =>{

    try {
        let productsExport = [create]
        const response = await axios.post(`${URL}products/` , productsExport);
        return response.request.statusText
        
    } catch (error) {
        return error.message
    }

}

export default createProduct