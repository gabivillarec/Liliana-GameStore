const mercadopago = require("mercadopago");
require("dotenv").config();
const {ACCESS_TOKEN} = process.env;
const URLBack = `http://localhost:3001/LilianaGameStore/`
const URLFront = `http://localhost:5173/`
//const URLBack = `https://liliana-server.onrender.com/LilianaGameStore/`
//const URLFront = `https://lilianagamesstore.onrender.com/`


mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const placeOrder = async (req, res) => {
  try {
      let products = req.body
      let mercadoProducts = products.map(prod => prod) 
    let preference = {
      items: mercadoProducts,
      
      back_urls: {
        success: `${URLBack}mercadosuccess/${products[0].idUser}`,
        failure: `${URLBack}mercadofailure`,
        pending: `${URLBack}mercadopending/${products[0].idUser}`,
      },
    };
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({response});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  placeOrder,
  URLBack,
  URLFront
};

/* [
  {
    id,
    title,
    quantity,
    currency_id: "ARS",
    unit_price,
    description,
    picture_url: image,
  },
] */
