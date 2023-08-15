import axios from "axios"
import { URL } from "../../main"

export const getUser = async(id)=>{
    let response =  await axios.get(`${URL}user/${id}`)
    return response.data
}