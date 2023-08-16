const {Router} = require("express");
const {placeOrder} = require("../Controllers/mercadopago/placeOrder");
const {successfulPayment} = require("../Controllers/mercadopago/success");
const failurPayment = require("../Controllers/mercadopago/failure");
const pendingPayment = require('../Controllers/mercadopago/pending');
const paymentRouter = Router();

paymentRouter.post("/mercadoorder", placeOrder);
paymentRouter.get("/mercadosuccess/:id", successfulPayment);
paymentRouter.get("/mercadofailure", failurPayment);
paymentRouter.get("/mercadopending/:id", pendingPayment);

module.exports = paymentRouter;