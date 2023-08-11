const { Review } = require('../db');

const deleteReview = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) throw new Error('Missing Review ID');

        const response = await Review.findByPk(id)
        response.destroy();

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { deleteReview }