const { Cart, Products } = require('../db');

const getCart = async (req, res) => {
    try {
        const response = await Cart.findAll()

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCartByUser = async (req, res) => {
    const { id } = req.params;


    try {
        if (id) {
            // Obtener los elementos en el carrito para el usuario dado
            const cart = await Cart.findAll({
                where: {userId: +id},
            });
            // Obtener los IDs de los productos en el carrito
            const productIds = cart.map(favorite => favorite.productId);
            // Obtener detalles de los productos en el carrito
            const cartProducts = await Products.findAll({
                where: {id: productIds }
            })
            // Crear una lista enriquecida con la cantidad de productos y detalles de los productos
            const cartWithQuantities = cartProducts.map(product => {
                const cartItem = cart.find(item => item.productId === product.id);
                return {
                    ...product.toJSON(),
                    itemCartId: cartItem.id,// Agregar el ID del elemento del carrito
                    cantidad: cartItem.cantidad
                }
            })

            res.status(200).json(cartWithQuantities);
        }else{
            res.status(400).json({ error: 'ID not provided'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getCart,
    getCartByUser
};