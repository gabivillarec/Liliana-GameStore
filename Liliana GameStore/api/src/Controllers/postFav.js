const { Favorites } = require('../db');

const postFavorite = async (req, res) => {
    const { product } = req.body;

    try {
        

        const newFavorite = await Favorites.create({
            product,
        });
        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; 

module.exports = {
    postFavorite,
};
