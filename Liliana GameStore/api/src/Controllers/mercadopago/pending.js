const { Orders, Products} = require("../../db");
const {formatDate,getCart,deleteCart} = require ("./success");
const {URLFront} = require('./placeOrder');
const {URLBack} = require('./placeOrder');


//!   Controlador
const successfulPayment = async (req, res) => {
  
  try {
    const info = req.query;
    let {collection_status} = info
  /*  GET /LilianaGameStore/mercadosuccess/2?collection_id=62168048431&collection_status=approved&payment_id=62168048431&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=11146411760&preference_id=1160706432-b8ece61f-a7cb-43a3-8356-28b4e35d2494&site_id=MLA&processing_mode=aggregator&merchant_account_id=null */
    const { id } = req.params;

    // Verificar si el estado es "pending"

    
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
        estado:'pendiente',
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
  };
  
};

module.exports = successfulPayment;