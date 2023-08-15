import axios from "axios"
import { URL } from "../../../../main"

export const updateproducto = async(id, create) =>{
    let objetoEnviar =  cleanObject(create)
    const UR = `${URL}products/`
    let response = await axios.put(UR + id, objetoEnviar)
    return response.data
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