const { Favorites, Products } = require('../db');

const getFavorites = async (req, res) => {
    try {
        const response = await Favorites.findAll();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getFavoriteById = async (req, res) => {
    try {
        const { id } = req.params;
        if (id) {
            const favorites = await Favorites.findAll({
                where: { userId: id },
            });

            const productIds = favorites.map(favorite => favorite.product);

            const favoriteProducts = await Products.findAll({
                where: { id: productIds },
            });

            // Enviar la respuesta después de obtener los productos
            res.status(200).json(favoriteProducts); // Mover esto aquí

        } else {
            // Manejar el caso en que no se proporciona el ID
            res.status(400).json({ error: 'ID not provided' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    getFavoriteById,
    getFavorites,
};