const { Cart } = require('../db')

const updateCartQuantity = async (req, res) => {
    try{
        const { cartItemId, nuevaCantidad } = req.body;

        if(!cartItemId || !nuevaCantidad){
            return res.status(400).json({ error: 'cartItemId y la nuevaCantidad son requeridos'});
        }

        //Buscar el elemento en el carrito por si ID
        const cartItem = await Cart.findByPk(cartItemId);

        if(!cartItemId){
            return res.status(404).json({ error: 'No se encontro el objeto en el carrito'});
        }

        //Actualizar la cantidad del elemento del carrito
        cartItem.cantidad = nuevaCantidad
        await cartItem.save();

        return res.status(200).json({ error: 'El objeto del carrito se actualizó correctamente' });
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    updateCartQuantity,
}