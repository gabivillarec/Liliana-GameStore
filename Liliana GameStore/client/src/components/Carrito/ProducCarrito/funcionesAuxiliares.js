
export const calcualarTotal = (products) =>{
    let suma = 0
    products.forEach(prod => suma = suma + (prod.price * prod.cantidad ))
    return suma
}