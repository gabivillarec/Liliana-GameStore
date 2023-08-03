
export const calcualarTotal = (products) =>{
    console.log(products)

    let suma = 0
    products.forEach(prod => suma = suma + prod.price)
    return suma
}