const { Products, Socket } = require("../db");
const { Op } = require("sequelize");

const getAllProducts = async (req, res) => {
  try {
    let { name, price, category, subcategory, brand, sockets, order, pageNumber } = req.query;

    let offset = 0;
    let limit = 15;

    if (pageNumber) {
      pageNumber = parseInt(pageNumber);
      offset = (pageNumber - 1) * limit;
    } else {
      pageNumber = 1;
      offset = (pageNumber - 1) * limit;
    }

    let filters = {};

    if (name) filters.name = { [Op.iLike]: `%${name}%` };
    if (category) filters.category_name = { [Op.iLike]: `%${category}%` };
    if (subcategory) filters.subcategory_name = { [Op.iLike]: `%${subcategory}%` };
    if (brand) filters.brand_name = { [Op.iLike]: `%${brand}%` };

    // Filtra desde el precio recibido hacia abajo
    if (price) filters.price = { [Op.lte]: price };

    const orderCriteria = order === "A" ? [["price", "DESC"]] : [["price", "ASC"]];
    const orderOption = order ? { order: orderCriteria } : {};

    const include = [
      {
        model: Socket,
        through: {
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      },
    ];


    // Agregar el filtro por nombre de socket solo si se proporciona el parámetro "sockets" en el query
    if (sockets) {
      include.push({
        model: Socket,
        where: { name: { [Op.iLike]: `%${sockets}%` } },
        through: {
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      });
    }

    const { count, rows } = await Products.findAndCountAll({
      where: filters,
      ...orderOption,
      limit,
      offset
    });

    return res.status(200).json({
      data: rows,
      totalElements: count,
      currentPage: pageNumber,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllProducts;
