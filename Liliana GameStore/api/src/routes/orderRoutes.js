const { Router } = require('express');
const createOrder = require('../Controllers/createOrder');
const getOrders = require ('../Controllers/getOrders')

const orderRoutes = Router();

orderRoutes.post('/order', createOrder);

orderRoutes.get('/order', getOrders );


module.exports = orderRoutes;