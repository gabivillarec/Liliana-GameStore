const { Orders, Users, Products, Cart } = require("../db");
const mercadopago = require("mercadopago");


// Creo una función para establecer la fecha
const formatDate = (date) => {

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;

  };

// Controlador
const createOrders = async (req,res) =>{
  
  try {
      const { userId, productId, quantity } = req.body;
  
      // Busco el usuario y el producto asociados a la orden
      const user = await Users.findByPk(userId);
      const product = await Products.findByPk(productId);
      const cart = await Cart.findAll({ where: { userId: userId } });
      
  
      if (!user || !product) {
        return res.status(404).json({ error: 'User or Product not found.' });
      };
      
      const order = await Orders.create({
        order_date: formatDate (new Date()),
        quantity,
        total_price: product.price * quantity,
        created: true,
      });

      // Asocio el usuario y el producto a la orden 
      await user.addOrder(order);
      await order.addProduct(product, { through: { quantity } });
    
      // Resto el stock del producto
      for (const item of cart) {
        const cartProduct = await Products.findByPk(item.productId);
        if (cartProduct && cartProduct.stock >= item.quantity) {
          await cartProduct.decrement('stock', { by: item.quantity });
        }
      }
                  
      // manejo respuesta mercadoPago
      let preference = {
        items: [],
      };
      
      for (const item of cart) {
        const product = await Products.findByPk(item.productId);
        if (product && product.stock >= item.quantity) {
          preference.items.push({
            title: product.name,
            unit_price: product.price,
            quantity: item.quantity,
          });
        }
      };

      if (preference.items.length !== 0) {
        const response = await mercadopago.preferences.create(preference);
        const preferenceId = response.body.id;
        return res.json(preferenceId);
      } else {
        return res.status(400).json({ error: 'Insufficient stock for one or more products in the cart.' });
      };    

    } catch (error) {   
      return res.status(500).json({ error: error.message });
    };
};

module.exports = createOrders;