const { Review } = require('../db')

const updateReview = async (req, res) => {
    try {
        const {id, newComment} = req.body;

        if(!id || !newComment){
            return res.status(400).json({ error: 'la id o el newComment son incorrectos'});
        }

        const review = await Review.findByPk(id);

        if(!review){
            return res.status(404).json({ error: 'No se encontro la review'})
        }

        review.comment = newComment;
        await review.save();

        return res.status(200).json({ message: 'El comentario a sido actualizado'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    updateReview,
}