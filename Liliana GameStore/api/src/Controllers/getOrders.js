const { Orders, Users, Products } = require("../db");

const getOrders = async (req,res) => {

    try {
        
        const orders = await Orders.findAll({where:{created: true}, include:[{model:Users}, {model:Products}]});


        if (orders.length === 0) {
            return res.status(400).json({ message: 'No created orders found.' });
          }

        return res.json(orders);

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
};

const getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.id

        const orders = await Orders.findAll({where:{created: true, userId: userId}, include:[{model:Users}, {model:Products}]});


        if (orders.length === 0) {
            return res.status(400).json({ message: 'No created orders found.' });
        }

        return res.json(orders);

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getOrders,
    getOrdersByUser,
};