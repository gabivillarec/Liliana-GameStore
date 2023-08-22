const { Orders, Products} = require("../../db");
const axios = require('axios');
const {URLFront} = require('./placeOrder')
const {URLBack} = require('./placeOrder');


//? Lógica para formatear la fecha
const formatDate = (date) => {
  const formattedDate = new Date(date).toISOString().replace('T', ' ').replace(/\..+/, '');
  return formattedDate;
};

//? Lógica para obtener el carrito
const getCart = async (id) => {
  try {
    const response = await axios.get(`${URLBack}cart/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error en getCart:', error);
    throw new Error('No se pudo obtener el carrito.');
  }
};

//? Lógica para borrar el carrito
const deleteCart = async (id) => {
  try {
    await axios.delete(`${URLBack}cart/compra/${id}`);
  } catch (error) {
    console.error('Error en deleteCart:', error);
    throw new Error('No se pudo borrar el carrito.');
  }
};  

//!   Controlador
const successfulPayment = async (req, res) => {

  try {
    const info = req.query;
    let {collection_status} = info
    const { id } = req.params;

  
  // Asigno la data de la función getCart
    const carts = await getCart(id)


  // Calculo el precio total y la cantidad
    let totalPrice = 0;
    let totalQuantity = 0;
    for (let item of carts) {
      if (item.stock >= item.cantidad) {
        totalPrice += +item.price;
        totalQuantity += +item.cantidad;
      }
    };

  // Creo la orden
    const order = await Orders.create({
      order_date: formatDate(new Date()),
      quantity: totalQuantity,
      total_price: totalPrice,
      created: true ,
      estado:'exitoso',
      userId: id,
      user: id,
    });


  // Asocio la Orden con los productos
    const productsIds = carts.map(product => product.id);
    await order.addProducts(productsIds);

  // Obtengo la orden con productos asociados
    const orderWithProducts = await Orders.findByPk(order.order_number, {
      include: Products,
    });

  // Actualizo el stock de los productos
    for (let item of carts) {
      const product = await Products.findByPk(item.id);
      if (product) {
        // Resto la cantidad del carrito al stock del producto
        const newStock = product.stock - item.cantidad;
        await Products.update({ stock: newStock }, { where: { id: product.id } });
      }
    };

  // Elimino el carrito
    await deleteCart(id);

  // Redirigir a la URL especificada
    res.redirect(`${URLFront}micuenta`); 
    
  } catch (error) {
    console.error('Error en successfulPayment:', error);
    res.status(500).send('Ha ocurrido un error en el servidor.');
  }
  
};

module.exports = {
  successfulPayment,
  formatDate,
  getCart,
  deleteCart
};