const { Router } = require('express');
const { getSocket } = require('../Controllers/getSocket')
const { deleteSocket } = require('../Controllers/deleteSocket')

const socketRoutes = Router();

socketRoutes.get('/socket', getSocket)

socketRoutes.delete('/socket/:id', deleteSocket)


module.exports = socketRoutes;