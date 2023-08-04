const { Orders } = require("../db");

const deleteOrder = async (req, res) => {
    try {
        const { order_numer } = req.params; 

        const destroyOrder = await Orders.destroy({
            where: { order_numer: order_numer }
        });

        if (destroyOrder === 1) {
            return res.json({ message: "Order deleted successfully." });
        } else {
            return res.status(400).json({ error: "Could not delete order. Order not found." });
        };

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteOrder;