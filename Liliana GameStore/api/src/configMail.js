const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'a', // aqui va el mail que envia correos
      pass: '' // aqui su contraseña para apps
    }
  });

module.exports = transporter;
