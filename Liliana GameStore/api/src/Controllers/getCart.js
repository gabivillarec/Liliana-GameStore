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
    try {
        const { id } = req.params;
        if (id) {
            const cart = await Cart.findAll({
                where: {userId: id},
            });

            const productIds = cart.map(favorite => favorite.productId);

            const cartProducts = await Products.findAll({
                where: {id: productIds }
            })

            res.status(200).json(cartProducts)
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