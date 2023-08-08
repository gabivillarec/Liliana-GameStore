import axios from 'axios'


export const calcualarTotal = (products) =>{
    let suma = 0
    products.forEach(prod => suma = suma + (prod.price * prod.cantidad ))
    return suma
}

export const deleteCart = async(itemCartId) =>{
    let URL = `http://localhost:3001/LilianaGameStore/cart/${itemCartId}`
    await axios.delete(URL)
}

export const putCart = async(itemCartId , cantidad) => {
    let objet = {
        cartItemId:itemCartId,
        nuevaCantidad:cantidad
    }
    let URL = 'http://localhost:3001/LilianaGameStore/cart/'
    await axios.put(URL, objet)

}