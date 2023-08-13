const { Router } = require('express');
const { getFavoriteByUser, getFavorites } = require('../Controllers/getFav')
const { postFavorite } = require('../Controllers/postFav')
const { deleteFavorite } = require('../Controllers/deleteFav')

const favoritesRoutes = Router();

favoritesRoutes.get('/favorites/:id', getFavoriteByUser);

favoritesRoutes.get('/favorites', getFavorites);

favoritesRoutes.delete('/favorites/:id', deleteFavorite);

favoritesRoutes.post('/favorites', postFavorite);




module.exports = favoritesRoutes;