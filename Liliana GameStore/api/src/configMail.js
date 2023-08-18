require('dotenv').config();
const { USER_MAIL_NODEMAILER, USER_PASS_NODEMAILER } = process.env;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: USER_MAIL_NODEMAILER, // aqui va el mail que envia correos
      pass: USER_PASS_NODEMAILER // aqui su contraseña para apps
    }
  });

module.exports = transporter;
