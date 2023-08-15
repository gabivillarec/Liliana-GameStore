const { Orders, Users, Products, Cart } = require("../../db");
const {getCartByUser} = require('../getCart')
const {deleteAllCart} = require('../deleteCart')

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


  const cart = await Cart.findAll({
    where: {userId: +id},
  });
// Obtener los IDs de los productos en el carrito
  const productIds = cart.map(favorite => favorite.productId);
// Obtener detalles de los productos en el carrito
  const cartProducts = await Products.findAll({
      where: {id: productIds }
  })
// Crear una lista enriquecida con la cantidad de productos y detalles de los productos
    const cartWithQuantities = cartProducts.map(product => {
    const cartItem = cart.find(item => item.productId === product.id);
    return {
        ...product.toJSON(),
        itemCartId: cartItem.id,// Agregar el ID del elemento del carrito
        cantidad: cartItem.cantidad
    }
})
  console.log(cartWithQuantities, 'cart')


  
  // Calculo el precio total y la cantidad
  let totalPrice = 0;
  let totalQuantity = 0;

  const orderedProducts = [];

  for (let item of cartWithQuantities) {
    if (item.stock >= item.cantidad) {
      totalPrice += +item.price;
      totalQuantity += +item.cantidad;
      orderedProducts.push(item); 
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
  console.log(order , 'order')
  console.log(orderedProducts , 'orderedProducts')
  // Asocio la Orden con los productos
  await order.addProducts(...orderedProducts);

  // Elimino el carrito y los items

        await Cart.destroy({
            where: { userId: id}
        });

  // Obtengo la order nuevamente para incluir los productos asociados
  const orderWithProducts = await Orders.findByPk(order.order_number, {
    include: Products,
  });
  console.log(orderWithProducts, 'orderproducts')
  // Redirige de nuevo a la URL especificada con los datos
  res.redirect(`${URL}`);

};

module.exports = successfulPayment;