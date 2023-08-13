const successfulPayment = (req, res) => {
  //www.localhost/compras
  const id = req.params
  const info = req.query;
  const infoJSON = JSON.stringify(info);
  const URL = `http://localhost:5173/`
  console.log(id)
  res
    .status(200)
    .redirect(`${URL}micuenta`);
};

module.exports = successfulPayment;
