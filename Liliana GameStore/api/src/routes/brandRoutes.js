const { Router } = require('express');
const { getBand } = require('../Controllers/getBrand')
const { deleteBrand } = require('../Controllers/deleteBrand')

const brandRoutes = Router();

brandRoutes.get('/brand', getBand)

brandRoutes.delete('/brand/:id', deleteBrand)


module.exports = brandRoutes;