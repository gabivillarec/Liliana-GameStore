const { Orders, Users, Products, Cart } = require("../../db");
const URL = "http://localhost:5173"
//const URL = "https://lilianagamesstore.onrender.com"

// Creo una función para formatear la fecha
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

  const { id } = req.params;


  const cart = await Cart.findAll({ where: { userId: id } });
  
  // Calculo el precio total y la cantidad
  let totalPrice = 0;
  let totalQuantity = 0;
  const orderedProducts = [];

  for (let item of cart) {
    const cartProduct = await Products.findByPk(item.productId);
    if (cartProduct && cartProduct.stock >= item.cantidad) {
      await cartProduct.decrement('stock', { by: item.cantidad });
      totalPrice += +cartProduct.price;
      totalQuantity += +item.cantidad;
      orderedProducts.push(cartProduct);
    }
  };

  // Creo la orden
  const order = await Orders.create({
    order_date: formatDate(new Date()),
    quantity: totalQuantity,
    total_price: totalPrice,
    created: true,
    userId: id,
		user: id,
  });

  // Asocio la Orden con los productos
  await order.addProducts(orderedProducts);

  // Elimino el carrito y los items
  await deleteAllCart(req, res);

  // Obtengo la order nuevamente para incluir los productos asociados
  const orderWithProducts = await Orders.findByPk(order.order_number, {
    include: Products,
  });

  // Redirige de nuevo a la URL especificada con los datos
  res.redirect(`${URL}`);

};

module.exports = successfulPayment;