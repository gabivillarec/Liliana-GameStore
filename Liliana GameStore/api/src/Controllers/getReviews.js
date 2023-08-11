const { Review, Users, Products } = require('../db');

const getReview = async (req, res) => {
    try {
        const response = await Review.findAll();
        res.json(response)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getReviewByUser = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            res.status(404).json({ error: 'El id del usuario es incorrecto'});    
        }
        const review = await Review.findAll({
            where: { userId: id },
        });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getReviewByProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            res.status(404).json({ error: 'El id del producto es incorrecto'})
        }
        const review = await Review.findAll({
            where: { productId: id },
        });
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { 
    getReview,
    getReviewByUser,
    getReviewByProduct,
};