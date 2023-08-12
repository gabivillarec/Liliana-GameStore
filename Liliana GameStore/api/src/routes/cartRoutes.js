const { Router } = require('express');
const { postCart } = require('../Controllers/postCart')
const { getCart, getCartByUser } = require('../Controllers/getCart')
const { deleteCart, deleteAllCart } = require('../Controllers/deleteCart')
const { updateCartQuantity } = require('../Controllers/updateCart')

const cartRoutes = Router();

cartRoutes.post('/cart', postCart);

cartRoutes.get('/cart', getCart);

cartRoutes.get('/cart/:id', getCartByUser);

cartRoutes.delete('/cart/:id', deleteCart);

cartRoutes.delete('/cart/compra/:id', deleteAllCart);

cartRoutes.put('/cart', updateCartQuantity);





module.exports = cartRoutes;