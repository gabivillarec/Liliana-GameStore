const {URLFront} = require('./placeOrder')

const pendingPayment = (req, res) => {
    //www.localhost/compras
    const id = req.params
    const info = req.query;
    const infoJSON = JSON.stringify(info);
    console.log(id)
    res
      .status(200)
      .redirect(`${URLFront}`);
  };
  
  module.exports = pendingPayment;