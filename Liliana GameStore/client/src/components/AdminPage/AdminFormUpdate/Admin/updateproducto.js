import axios, { toFormData } from "axios"
import { URL } from "../../../../main"

export const updateproducto = async(id, create) =>{
    let objetoEnviar =  cleanObject(create)
    const UR = `${URL}products/`
    try {
        let response = await axios.put(UR + id, objetoEnviar)
        return response.request.statusText
    } catch (error) {
        return error.message
    }
    
}

function cleanObject(obj) {
    const cleanedObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (value !== null && value !== undefined && value !== '') {
                cleanedObj[key] = value;
            }
        }
    }

    return cleanedObj;
}