const { Router } = require('express');
const { getFavoriteById, getFavorites } = require('../Controllers/getFav')
const { postFavorite } = require('../Controllers/postFav')
const { deleteFavorite } = require('../Controllers/deleteFav')

const favoritesRoutes = Router();

favoritesRoutes.get('/Favorites/:id', getFavoriteById);

favoritesRoutes.get('/Favorites', getFavorites);

favoritesRoutes.delete('/Favorites/:id', deleteFavorite);

favoritesRoutes.post('/Favorites', postFavorite);




module.exports = favoritesRoutes;