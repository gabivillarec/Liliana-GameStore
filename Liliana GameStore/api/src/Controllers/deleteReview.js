const { Review } = require('../db');

const deleteReview = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) throw new Error('Missing Review ID');

        const response = await Review.findByPk(id)
        await response.destroy();

        res.status(200).json({ message: 'Review eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { deleteReview }