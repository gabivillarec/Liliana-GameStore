export const ORDER_ID_ASCENDENTE = 'ORDER_ID_ASCENDENTE';
export const ORDER_ID_DESCENDENTE = 'ORDER_ID_DESCENDENTE';

export const ORDER_PRICE_DESCENDENTE = 'ORDER_PRICE_DESCENDENTE';
export const ORDER_PRICE_ASCENDENTE = 'ORDER_PRICE_ASCENDENTE';


export const ORDER_RATING_DESCENDENTE = 'ORDER_RATING_DESCENDENTE';
export const ORDER_RATING_ASCENDENTE = 'ORDER_RATING_ASCENDENTE';

export const ordenamiento = (products ,tipo) => {
    switch(tipo){
        case ORDER_ID_ASCENDENTE:
            return products.sort((a, b) => b.id - a.id);
        case ORDER_ID_DESCENDENTE:
            return products.sort((a, b) => a.id - b.id)
        case ORDER_PRICE_ASCENDENTE:
            return products.sort((a, b) => b.price - a.price)
        case ORDER_PRICE_DESCENDENTE:
            return products.sort((a, b) => a.price - b.price)
        case ORDER_RATING_ASCENDENTE :
            return products.sort((a, b) => b.rating - a.rating)
        case ORDER_RATING_DESCENDENTE:
            return products.sort((a, b) => a.rating - b.rating)
        default:
            return products
    }
}