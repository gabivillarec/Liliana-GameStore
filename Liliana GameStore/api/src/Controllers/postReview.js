const { Review, Products, Users } = require('../db')

const postReview = async (req, res) => {
    const { productId, userId, comment, rating } = req.body;
    try {
        const product = await Products.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'El producto no existe' });
        }

        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'El usuario no existe' });
        }

        const newReview = await Review.create({
            productId,
            userId,
            comment,
            rating
        });

        res.status(201).json({ message: 'Review creada exitosamente', review: newReview });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { postReview }