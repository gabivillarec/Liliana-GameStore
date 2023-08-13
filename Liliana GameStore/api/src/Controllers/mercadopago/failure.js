const {URLFront} = require('./placeOrder')

const failurPayment = (req, res) => {
    //www.localhost/compras
    const info = req.query;
    const infoJSON = JSON.stringify(info);

    res
      .status(400)
      .redirect(`${URLFront}carrito`);
  };
  
  module.exports = failurPayment;