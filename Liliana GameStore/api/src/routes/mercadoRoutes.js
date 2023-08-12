const {Router} = require("express");
const {placeOrder} = require("../Controllers/mercadopago/placeOrder");
const successfulPayment = require("../Controllers/mercadopago/success");

const paymentRouter = Router();

paymentRouter.post("/mercadoorder", placeOrder);
paymentRouter.get("/mercadosuccess", successfulPayment);

module.exports = paymentRouter;