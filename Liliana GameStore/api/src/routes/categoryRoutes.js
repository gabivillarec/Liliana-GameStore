const { Router } = require('express');
const { getCategory } = require('../Controllers/getCategory')
const { deleteCategory } = require('../Controllers/deleteCategory')

const categoryRoutes = Router();

categoryRoutes.get('/category', getCategory);

categoryRoutes.delete('/category/:id', deleteCategory)

module.exports = categoryRoutes;