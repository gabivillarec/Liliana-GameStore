const { Review } = require('../db');

const updateReview = async (req, res) => {
    try {
        const { id, newComment, newRating } = req.body;

        if (!id || (newComment === undefined && newRating === undefined)) {
            return res.status(400).json({ error: 'La ID, el nuevo comentario o la nueva calificación son incorrectos' });
        }

        const review = await Review.findByPk(id);

        if (!review) {
            return res.status(404).json({ error: 'No se encontro la review' });
        }

        if (newComment !== undefined) {
            review.comment = newComment;
        }

        if (newRating !== undefined) {
            review.rating = newRating;
        }

        await review.save();

        return res.status(200).json({ message: 'El comentario ha sido actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateReview,
}