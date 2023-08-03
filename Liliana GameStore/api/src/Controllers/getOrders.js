const { Orders, Users, Products } = require("../db");

const getOrders = async (req,res) => {

    try {
        
        const orders = await Orders.findAll({where:{created: true}, include:[{model:Users}, {model:Products}]});


        if (orders.length === 0) {
            return res.status(404).json({ message: 'No se encontraron órdenes creadas.' });
          }

        return res.json(orders);

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
};

module.exports = getOrders;