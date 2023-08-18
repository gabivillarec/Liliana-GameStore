const { Router } = require('express');

const createProduct = require("../Controllers/createProduct");
const getAllProducts = require("../Controllers/getAllProducts");
const getProductById = require("../Controllers/getProductById");
const updateProduct = require("../Controllers/updateProduct");
const deleteProduct = require("../Controllers/deleteProduct");
const deleteImage = require("../Controllers/deleteImage");

const productRoutes = Router();

productRoutes.get("/products" , getAllProducts);

productRoutes.get("/products/:id" , getProductById);

productRoutes.post("/products" , createProduct);

productRoutes.put("/products/:id" , updateProduct);

productRoutes.delete("/products/:id" , deleteProduct);

productRoutes.delete("/products/:id/images/:position", deleteImage);


module.exports = productRoutes;