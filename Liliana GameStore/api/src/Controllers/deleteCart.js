const { Cart, Users } = require('../db')

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


const deleteAllCart = async (req, res) => {
    try {
        const {id} = req.params

        if(!id) {
            return res.status(400).json({ error: 'El valor del id es incorrecto' })
        }

        const user = await Users.findByPk(id);
        if(!user){
            return res.status(404).json({ error: 'Usuario no encontrado'})
        }

        await Cart.destroy({
            where: { userId: id}
        });

        res.json({ message: 'Los items del carrito se borraron satisfactoriamente'})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    deleteCart,
    deleteAllCart,
}