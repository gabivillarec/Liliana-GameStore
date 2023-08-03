const { Orders, Users, Products } = require("../db");


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
    
        if (!user || !product) {
          return res.status(404).json({ error: 'User or Product not found.' });
        }
    
        // Creo la orden
        const order = await Orders.create({
            order_date: new Date(),
            quantity,
            total_price: product.price * quantity 
          });
    
        // Asocio el usuario y el producto a la orden 
        await user.addOrder(order);
        await order.addProduct(product, { through: { quantity } });
        
        //Estructuro la respuesta
        const userDetails = {
            user_id: user.id,
            user_name: user.name,
            user_email: user.email,
            user_address: user.address,
            user_cp: user.cp,
            user_phone: user.phone
          };
      
          const productDetails = {
            product_id: product.id,
            product_name: product.name
          };
      
          
          const response = {
            order_number: order.order_numer,
            order_date: formatDate(order.order_date),
            ...userDetails,
            ...productDetails,
            quantity: quantity,
            total_price: order.total_price
          };
    
        return res.json( response );
      } catch (error) {
    
        return res.status(500).json({ error: error.message });
      }
};

module.exports = createOrders;