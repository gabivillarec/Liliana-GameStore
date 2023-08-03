const { Router } = require('express');
const { getSubCategory } = require('../Controllers/getSubCategory')
const { deleteSubCategory } = require('../Controllers/deleteSubCategory')

const subCategoryRoutes = Router();

subCategoryRoutes.get('/subcategory', getSubCategory);

subCategoryRoutes.delete('/subcategory/:id', deleteSubCategory);


module.exports = subCategoryRoutes;