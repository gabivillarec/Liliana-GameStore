const { Router } = require('express');
const { postCart } = require('../Controllers/postCart')
const { getCart, getCartByUser } = require('../Controllers/getCart')
const { deleteCart } = require('../Controllers/deleteCart')
const { updateCartQuantity } = require('../Controllers/updateCart')

const cartRoutes = Router();

cartRoutes.post('/cart', postCart);

cartRoutes.get('/cart', getCart);

cartRoutes.get('/cart/:id', getCartByUser);

cartRoutes.delete('/cart/:id', deleteCart);

cartRoutes.put('/cart', updateCartQuantity);




module.exports = cartRoutes;