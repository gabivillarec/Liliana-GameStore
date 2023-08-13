const {URLFront} = require('./placeOrder')

const successfulPayment = (req, res) => {
  //www.localhost/compras
  const id = req.params
  const info = req.query;
  const infoJSON = JSON.stringify(info);
  const URL = `http://localhost:5173/`
  console.log(URLFront)
  res
    .status(200)
    .redirect(`${URLFront}micuenta`);
};

module.exports = successfulPayment;
