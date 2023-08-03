const { Brand } = require('../db')

const getBand = async (req, res) => {
    try {
        const response = await Brand.findAll()
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getBand,
}