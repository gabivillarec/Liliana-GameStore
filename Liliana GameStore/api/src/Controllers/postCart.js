const { Cart, Users , Products} = require('../db')

const postCart = async (req, res) => {
    const {productId, userId, cantidad} = req.body
    try {
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const productInstance = await Products.findByPk(productId);
        if(!productInstance){
            return res.status(404).json({ error: 'Producto no encontrado'})
        }
        
        const cart = await Cart.create({
            productId,
            userId,
            cantidad
        });

    res.status(201).json({ cart, productInstance});
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { postCart }