const failurPayment = (req, res) => {
    //www.localhost/compras
    const info = req.query;
    const infoJSON = JSON.stringify(info);
    const URL = `http://localhost:5173/`
    res
      .status(400)
      .redirect(`${URL}carrito`);
  };
  
  module.exports = failurPayment;