const { Products, Category, SubCategory, Brand, Socket } = require("../db");
const { Op } = require("sequelize");

const createProduct = async (req, res) => {
  try {
    const productsData = req.body; // Array de objetos con datos de los productos

    // Array para almacenar los productos creados
    const createdProducts = [];

    // Recorrer la array de objetos
    for (const productData of productsData) {
      const {
        name,
        price,
        images,
        stock,
        rating,
        description_text,
        characteristics,
        category,
        subcategory,
        brand,
        socket,
        disabled
      } = productData;
console.log(images)
      if (
        !name ||
        !price ||
        (images.length === 0) ||
        !stock ||
        !rating ||
        !category ||
        !subcategory ||
        !brand ||
        !description_text
      )
        return res.status(400).send("Faltan datos");

      // Validación repetidos
      const productExist = await Products.findOne({
        where: {
          name: { [Op.iLike]: name },
        },
      });

      if (productExist) {
        throw new Error(`El producto ${name} ya existe.`);
      }

      const [catDB] = await Category.findOrCreate({
        where: {
          name: { [Op.iLike]: category },
        },
        defaults: {
          name: category,
        },
      });

      const [subCatDB] = await SubCategory.findOrCreate({
        where: {
          name: { [Op.iLike]: subcategory },
        },
        defaults: {
          name: subcategory,
        },
      });

      const [brandDB] = await Brand.findOrCreate({
        where: {
          name: { [Op.iLike]: brand },
        },
        defaults: {
          name: brand,
        },
      });

      // Inicializar socketDBs como un array vacío
      let socketDBs = [];

      // Verificar si socket existe y no está vacío antes de buscar o crear los sockets
      if (socket && socket.length > 0) {
        socketDBs = await Promise.all(
          socket.map(async (socketValue) => {
            const [socketDB] = await Socket.findOrCreate({
              where: {
                name: { [Op.iLike]: socketValue },
              },
              defaults: {
                name: socketValue,
              },
            });
            return socketDB;
          })
        );
      }

      const newProduct = await Products.create({
        name: name,
        price: price,
        images: images,
        stock: stock,
        rating: rating,
        description_text: description_text,
        characteristics: characteristics,
        category_name: catDB.dataValues.name,
        subcategory_name: subCatDB.dataValues.name,
        brand_name: brandDB.dataValues.name,
        categoryId: catDB.dataValues.id,
        subCategoryId: subCatDB.dataValues.id,
        brandId: brandDB.dataValues.id,
        disabled: disabled
      });

      // Asocio la tabla Socket con el producto creado (en caso de que exista)
      if (socketDBs.length > 0) {
        await newProduct.setSockets(socketDBs);
      }

      // Agregar el producto creado al array de productos creados
      createdProducts.push(newProduct);
    }

    // Finalización respuesta exitosa con los productos creados
    return res.status(200).json({ createdProducts });

  } catch (error) {
    
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createProduct;
