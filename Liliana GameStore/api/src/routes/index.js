const { Router } = require('express');
const usersRoutes = require('./usersRoutes');
const favoritesRoutes = require('./favoritesRoutes');
const login = require('../Controllers/login');
const productRoutes = require('./productRoutes');
const brandRoutes = require('./brandRoutes');
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');
const orderRoutes = require('./orderRoutes');
const socketRoutes = require('./socketRoutes');
const subCategoryRoutes = require('./subCategoryRoutes');
const reviewRoutes = require('./reviewRoutes');
const paymentRouter = require('./mercadoRoutes')


const router = Router();

// Configurar los routers

router.use('/LilianaGameStore',productRoutes);
router.use('/LilianaGameStore',brandRoutes);
router.use('/LilianaGameStore',cartRoutes);
router.use('/LilianaGameStore',categoryRoutes);
router.use('/LilianaGameStore',favoritesRoutes);
router.use('/LilianaGameStore',orderRoutes);
router.use('/LilianaGameStore',socketRoutes);
router.use('/LilianaGameStore',subCategoryRoutes);
router.use('/LilianaGameStore',usersRoutes);
router.use('/LilianaGameStore',reviewRoutes);
router.use('/LilianaGameStore',paymentRouter);
router.use('/LilianaGameStore',login);


module.exports = router;
