const { Category } = require('../db')

const getCategory = async (req, res) => {
    try {
        const response = await Category.findAll()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCategory,
}