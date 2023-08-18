import axios from "axios";
import { URL } from "../../../main";

export const postCarrito = async(productID , userID , cantidad) => {
    let objPost = {
        productId:productID,
        userId: userID,
        cantidad: cantidad }
        let URLcart = `${URL}cart`
        try {
            let response = await axios.post(URLcart, objPost)
            return response
        } catch (error) {
            return error.message
        }
    }
