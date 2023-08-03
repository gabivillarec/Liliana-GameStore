const { Cart } = require('../db')

const deleteCart = async (req, res) => {
    try {
        const {id} = req.params

        if(!id) throw new Error('Missing Cart ID')

        const response = await Cart.findByPk(id);
        response.destroy();

        res.json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
} 


module.exports = {
    deleteCart,
}