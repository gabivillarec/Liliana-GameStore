const { Router } = require('express');
const { getFavoriteById, getFavorites } = require('../Controllers/getFav')
const { postFavorite } = require('../Controllers/postFav')
const { deleteFavorite } = require('../Controllers/deleteFav')

const favoritesRoutes = Router();

favoritesRoutes.get('/:id', getFavoriteById);

favoritesRoutes.get('/', getFavorites);

favoritesRoutes.delete('/:id', deleteFavorite);

favoritesRoutes.post('/', postFavorite);




module.exports = favoritesRoutes;