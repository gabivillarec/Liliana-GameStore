const { Products, Socket, Category, SubCategory, Brand } = require("../db");
const { Op } = require("sequelize");

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            price,
            images: newImages, // Cambiamos "image" a "images"
            stock,
            rating,
            description_text,
            characteristics,
            category,
            subcategory,
            brand,
            socket,
            disabled
        } = req.body;

        // Buscar el producto que se desea actualizar
        const product = await Products.findByPk(id, { include: Socket });
        if (!product) return res.status(404).send("Product not found");

        // Definir un objeto para almacenar los campos a actualizar
        const updateFields = {};

        // Verificar si los campos están presentes en el cuerpo de la solicitud y agregarlos al objeto updateFields
        if (name) updateFields.name = name;
        if (price) updateFields.price = price;
        if (stock) updateFields.stock = stock;
        if (rating) updateFields.rating = rating;
        if (description_text) updateFields.description_text = description_text;
        if (disabled !== undefined) {
            updateFields.disabled = disabled === true || disabled === 'true';
        }

        // Verificar y agregar las nuevas URLs de imágenes al array existente
        if (newImages && Array.isArray(newImages)) {
            updateFields.images = [...product.images, ...newImages];
        } else if (newImages) {
            updateFields.images = [...product.images, newImages];
        }

        // Verificar si se proporcionó el objeto characteristics y actualizar propiedades automáticamente
        if (characteristics) {
            // Recorrer las propiedades del objeto characteristics proporcionadas en el cuerpo de la solicitud
            Object.keys(characteristics).forEach((prop) => {
                const lowerCaseProp = prop.toLowerCase();

                // Actualizar la propiedad en el objeto updateFields
                updateFields[`characteristics.${lowerCaseProp}`] = characteristics[prop];
            });
        }

        // Verificar si se proporcionaron las categorías, subcategorías y marcas
        if (category) {
            const [catDB] = await Category.findOrCreate({
                where: { name: { [Op.iLike]: category } },
                defaults: { name: category },
            });
            updateFields.category_name = catDB.dataValues.name;
            updateFields.categoryId = catDB.dataValues.id;
        }

        if (subcategory) {
            const [subCatDB] = await SubCategory.findOrCreate({
                where: { name: { [Op.iLike]: subcategory } },
                defaults: { name: subcategory },
            });
            updateFields.subcategory_name = subCatDB.dataValues.name;
            updateFields.subCategoryId = subCatDB.dataValues.id;
        }

        if (brand) {
            const [brandDB] = await Brand.findOrCreate({
                where: { name: { [Op.iLike]: brand } },
                defaults: { name: brand },
            });
            updateFields.brand_name = brandDB.dataValues.name;
            updateFields.brandId = brandDB.dataValues.id;
        }

        // Verificar si se proporcionaron los sockets y agregarlos al objeto updateFields
        if (socket && socket.length > 0) {
            const socketDBs = await Promise.all(
                socket.map(async (socketValue) => {
                    const [socketDB] = await Socket.findOrCreate({
                        where: { name: { [Op.iLike]: socketValue } },
                        defaults: { name: socketValue },
                    });
                    return socketDB;
                })
            );
            
            // Asociar los sockets actualizados y/o nuevos con el producto
            await product.setSockets(socketDBs);

            // Recargar las relaciones después de actualizar el producto
            await product.reload({ include: Socket });
        }

        // Actualizar los campos del producto en la tabla Products
        const result = await product.update(updateFields);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = updateProduct;