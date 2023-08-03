const { Router } = require('express');
const createOrder = require('../Controllers/createOrder')

const orderRoutes = Router();

orderRoutes.post('/order', createOrder)


module.exports = orderRoutes;