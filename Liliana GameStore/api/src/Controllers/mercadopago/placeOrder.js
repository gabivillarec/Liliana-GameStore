const mercadopago = require("mercadopago");
require("dotenv").config();
const {ACCESS_TOKEN} = process.env;
const URL = `http://localhost:5173/`

mercadopago.configure({
  access_token: `APP_USR-8709825494258279-092911-227a84b3ec8d8b30fff364888abeb67a-1160706432`,
});

const placeOrder = async (req, res) => {
  try {
      let products = req.body
      let mercadoProducts = products.map(prod => prod) 
    let preference = {
      items: mercadoProducts,
      
      back_urls: {
        success: `http://localhost:3001/LilianaGameStore/mercadosuccess/${products[0].idUser}`,
        failure: `http://localhost:3001/LilianaGameStore/mercadofailure`,
        pending: `${URL}micuenta`,
      },
    };
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({response});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {placeOrder};

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
