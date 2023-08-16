const { Orders, Products, Cart } = require("../../db");
const axios = require('axios');
const {URLFront} = require('./placeOrder')
const {URLBack} = require('./placeOrder');
const { refund } = require("mercadopago");

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const pendingPayment = async(req, res) => {
  const info = req.query;

  const { id } = req.params;
  const getCart = async(id) =>{
    try {
      const response = await axios.get(`${URLBack}cart/${id}`);
      return response.data; 
    } catch (error) {
      return console.log(error.message)
    }
  }
  const deleteCart = async(id) =>{
    try {
      await axios.delete(`${URLBack}cart/compra/${id}`);
    } catch (error) {
      return console.log(error.message)
    }
  }



  const carts = await getCart(id)
  // Obtener los IDs de los productos en el carrito
  const productIds = carts.map(favorite => favorite.productId);


// Calculo el precio total y la cantidad
let totalPrice = 0;
let totalQuantity = 0;
const orderedProducts = [];
for (let item of carts) {
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
    created: true ,
    userId: id,
		user: id,
  });
// Asocio la Orden con los productos
let productsIds = carts.map(product=> {
  return product.id
})

try {
  await order.addProducts(productsIds);//el error esta aca
} catch (error) {
  console.error('Error al agregar productos a la orden:', error.message);
  // Manejo de errores
}
// Elimino el carrito y los items

    // Obtengo la order nuevamente para incluir los productos asociados
    const orderWithProducts = await Orders.findByPk(order.order_number, {
      include: Products,
    });
    await deleteCart(id)
// Redirige de nuevo a la URL especificada con los datos
res.redirect(`${URLFront}`);
  };
  
  module.exports = pendingPayment;