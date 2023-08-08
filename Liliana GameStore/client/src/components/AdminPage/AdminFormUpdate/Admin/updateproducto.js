import axios from "axios"

export const updateproducto = async(id, create) =>{
    let objetoEnviar =  cleanObject(create)
    const URL = 'http://localhost:3001/LilianaGameStore/products/'
    let response = await axios.put(URL + id, objetoEnviar)
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