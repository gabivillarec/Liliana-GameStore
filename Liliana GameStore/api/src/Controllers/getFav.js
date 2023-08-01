const { Favorites } = require('../db');

const getFavorites = async (req, res) => {
    try {
        const response = await Favorites.findAll();
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};


const getFavoriteById = async (req, res) => {
    try {
        const { id } = req.params;
        if(id){
            const favorites = await Favorites.findByPk(id);
            res.status(200).json(favorites)
        }
    } catch (error) {
        res.status(500).json({error: error.message})

    }
};



module.exports = {
    getFavoriteById,
    getFavorites,
};