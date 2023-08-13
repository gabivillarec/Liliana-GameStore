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

export const objetoMercado = (products , idUser) =>{
    let objMercado = products.map(produc => {
        return{
            idUser:idUser,
            id: produc.id,
            title: produc.name,
            quantity: produc.cantidad,
            currency_id: "ARS",
            unit_price: parseInt(produc.price),
            description: produc.description_text,
            picture_url: produc.image
        }
    })
    return objMercado
} 
export const detailMercado = (products, idUser) =>{
    let objMercado = {
        idUser:idUser,
        id: products.id,
        title: products.name,
        quantity: products.cantidad,
        currency_id: "ARS",
        unit_price: parseInt(products.price),
        description: products.description_text,
        picture_url: products.image

    }
        
    
    return objMercado
} 