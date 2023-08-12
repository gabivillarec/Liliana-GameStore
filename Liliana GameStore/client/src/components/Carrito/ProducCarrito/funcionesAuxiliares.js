import axios from 'axios'
import { URL } from '../../../main'

export const calcualarTotal = (products) =>{
    let suma = 0
    products.forEach(prod => suma = suma + (prod.price * prod.cantidad ))
    return suma
}

export const deleteCart = async(itemCartId) =>{
    let UR = `${URL}cart/${itemCartId}`
    await axios.delete(UR)
}

export const putCart = async(itemCartId , cantidad) => {
    let objet = {
        cartItemId:itemCartId,
        nuevaCantidad:cantidad
    }
    let UR = `${URL}cart/`
    await axios.put(UR, objet)

}

export const objetoMercado = (products) =>{
    let objMercado = products.map(produc => {
        return{
            id: produc.id,
            title: produc.name,
            quantity: produc.cantidad,
            currency_id: "ARS",
            unit_price: parseInt(produc.price),
            description: produc.description_text,
            picture_url: produc.image
        }
    })
    console.log(objMercado)
    return objMercado
} 