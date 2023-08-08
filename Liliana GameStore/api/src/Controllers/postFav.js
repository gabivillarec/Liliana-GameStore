const { Favorites, Users, Products } = require('../db');

const postFavorite = async (req, res) => {
    const { product, userId } = req.body;
    try {
    // Primero, verifica si el usuario existe
    const user = await Users.findByPk(userId);
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    //veridica si el producto existe
    const productItem = await Products.findByPk(product);
    if(!productItem){
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    // Crea el favorito asociado al usuario
    const favorite = await Favorites.create({
        product,
        userId, // Asigna el ID del usuario al favorito
    });

    return res.status(201).json(favorite)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 

module.exports = {
    postFavorite,
};
