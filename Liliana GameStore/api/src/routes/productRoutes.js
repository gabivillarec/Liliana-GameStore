const { Router } = require('express');

const productRoutes = Router();

productRoutes.get("/products" , getAllProducts);

productRoutes.get("/products/name" , getProductByName);

productRoutes.get("/products/:id" , getProductById);

productRoutes.post("/products" , createProduct);

productRoutes.put("/products/:id" , updateProduct);

productRoutes.delete("/products/:id" , deleteProduct);


module.exports = productRoutes;