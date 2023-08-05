const { Products , Socket, Category, SubCategory, Brand } = require("../db");
const { Op } = require("sequelize");

const updateProduct = async (req , res) => {
    
    try {

        const { id } = req.params;
        const { name , price , image , stock , rating , description_text , category , subcategory , brand , socket } = req.body;

        // Buscar el producto que se desea actualizar
        const product = await Products.findByPk(id);
        if(!product) return res.status(404).send("Product not found");

        // Buscar o crear la categoría según su nombre
        const [catDB] = await Category.findOrCreate({
            where: {
                name: { [Op.iLike]: category }
            },
            defaults: {
                name: category
            }
        });

        // Buscar o crear la subcategoría según su nombre
        const [subCatDB] = await SubCategory.findOrCreate({
            where: {
                name: { [Op.iLike]: subcategory }
            },
            defaults: {
                name: subcategory
            }
        });

        // Buscar o crear la marca según su nombre
        const [brandDB] = await Brand.findOrCreate({
            where: {
                name: { [Op.iLike]: brand }
            },
            defaults: {
                name: brand
            }
        });


        const socketDBs = await Promise.all(socket.map(async (socketValue) => {
            const [socketDB] = await Socket.findOrCreate({
                where: {
                    name: { [Op.iLike]: socketValue }
                },
                defaults: {
                    name: socketValue
                }
            });
            return socketDB;
        }));

        // Actualizar los campos del producto en la tabla Products
        const result = await product.update({
            name, price, image, stock, rating, description_text,
            category_name: catDB.name,
            subcategory_name: subCatDB.name,
            brand_name: brandDB.name,
            categoryId: catDB.id,
            subCategoryId: subCatDB.id,
            brandId: brandDB.id
        });

        // Asociar los sockets actualizados y/o nuevos con el producto
        if (socketDBs.length > 0) {
            await product.setSockets(socketDBs);
        }
        
            return res.status(200).send("Profile updated successfully.");

    } catch (error) {

        return res.status(500).json({error: error.message});

    }
};

module.exports = updateProduct;