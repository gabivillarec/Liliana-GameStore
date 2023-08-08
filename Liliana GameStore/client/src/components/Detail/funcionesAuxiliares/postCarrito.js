import axios from "axios";

export const postCarrito = async(productID , userID , cantidad) => {
    let objPost = {
        productId:productID,
        userId: userID,
        cantidad: cantidad }
        console.log(objPost)
        let URLcart = 'http://localhost:3001/lilianagamestore/cart/'
        try {
            let response = await axios.post(URLcart, objPost)
            console.log(response)
            return response
        } catch (error) {
            return error.message
        }
    }
