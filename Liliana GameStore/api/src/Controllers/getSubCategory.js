const { SubCategory } = require('../db')

const getSubCategory = async (req, res) => {
    try {
        const response = await SubCategory.findAll()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getSubCategory,
}