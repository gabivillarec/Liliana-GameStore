const { Orders, Products, Cart } = require("../../db");
const axios = require('axios');
const {URLFront} = require('./placeOrder')
const {URLBack} = require('./placeOrder');
const { refund } = require("mercadopago");


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
  console.log(info)
  let {collection_status} = info
 /*  GET /LilianaGameStore/mercadosuccess/2?collection_id=62168048431&collection_status=approved&payment_id=62168048431&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=11146411760&preference_id=1160706432-b8ece61f-a7cb-43a3-8356-28b4e35d2494&site_id=MLA&processing_mode=aggregator&merchant_account_id=null */
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

module.exports = successfulPayment;