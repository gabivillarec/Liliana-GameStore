const { Router } = require('express');
const usersRoutes = require('./usersRoutes')
const productRoutes = require('./productRoutes')
const router = Router();

// Configurar los routers

router.use('/LilianaGameStore',usersRoutes);
router.use('/LilianaGameStore',productRoutes);
//router.use('/LilianaGameStore',brandRoutes);
//router.use('/LilianaGameStore',cartRoutes);
//router.use('/LilianaGameStore',categoryRoutes);
//router.use('/LilianaGameStore',favoritesRoutes);
//router.use('/LilianaGameStore',orderRoutes);
//router.use('/LilianaGameStore',purchaseHistoryRoutes);
//router.use('/LilianaGameStore',socketRoutes);
//router.use('/LilianaGameStore',subCategoryRoutes);


module.exports = router;
