import axios from 'axios'
import { URL } from '../../../main';

const createProduct = async (create) =>{
    try {
        let productsExport = [create]

        const response = await axios.post(`${URL}products` , productsExport);
        console.log(response)
        return alert(response.data)
        
    } catch (error) {
        return alert(error.message)
    }

}

export default createProduct