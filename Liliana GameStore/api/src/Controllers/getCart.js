const { Cart } = require('../db');

const getCart = async (req, res) => {
    try {
        const response = await Cart.findAll()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCart,
};