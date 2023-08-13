const { Orders, Users, Products, Cart } = require("../../db");

// Crea una función para formatear la fecha
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// Controlador
const successfulPayment = async (req, res) => {
  const info = req.query;
  const infoJSON = JSON.stringify(info);

  const { userId } = req.params;
  const user = await Users.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const cart = await Cart.findAll({ where: { userId: userId } });
  
  // Calcula el precio total y la cantidad
  let totalPrice = 0;
  let totalQuantity = 0;
  for (let item of cart) {
    const cartProduct = await Products.findByPk(item.productId);
    if (cartProduct && cartProduct.stock >= item.cantidad) {
      await cartProduct.decrement('stock', { by: item.cantidad });
      totalPrice += cartProduct.price;
      totalQuantity += item.cantidad;
    }
  }

  // Crea la orden
  const order = await Orders.create({
    order_date: formatDate(new Date()),
    quantity: totalQuantity,
    total_price: totalPrice,
    created: true,
  });

  // Redirige de nuevo a la URL especificada con los datos
  res.redirect(`http://localhost:5173/?data=${encodeURIComponent(infoJSON)}`);
};

module.exports = successfulPayment;