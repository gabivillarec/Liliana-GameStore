const { Router } = require('express');
//const createOrder = require('../Controllers/createOrder');
const {getOrders, getOrdersByUser} = require ('../Controllers/getOrders')
const deleteOrder = require('../Controllers/deleteOrder')

const orderRoutes = Router();

//orderRoutes.post('/order', createOrder);

orderRoutes.get('/order', getOrders );

orderRoutes.get('/order/:id', getOrdersByUser);

orderRoutes.delete('/order/:order_numer', deleteOrder);

module.exports = orderRoutes;