const successfulPayment = (req, res) => {
  //www.localhost/compras
  const info = req.query;
  const infoJSON = JSON.stringify(info);

  res
    .status(200)
    .redirect(`http://localhost:5173/?data=${encodeURIComponent(infoJSON)}`);
};

module.exports = successfulPayment;
