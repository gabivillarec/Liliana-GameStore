const { Brand } = require('../db');


const deleteBrand = async (req, res) => {
    try {
        const {id} = req.params;

        if(!id) throw new Error('Missing Favorite ID');

        const response = await Brand.findByPk(id);
        response.destroy();

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { deleteBrand }