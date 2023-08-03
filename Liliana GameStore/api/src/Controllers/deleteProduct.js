const { Products } = require('../db');

const deleteProduct = async (req , res) => {
    try {

        const { id } = req.params;

        const deletedProduct = await Products.destroy({
            where: { id:id }
        });

        if (deletedProduct === 1) {
            return res.status(200).send("User deleted successfully.");
        } else {
            return res.status(400).send("Could not delete user. User not found.");
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteProduct;