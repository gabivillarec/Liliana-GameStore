const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'nicorojaselcapo@gmail.com',
      pass: 'iikbwxvpskwcqqcp'
    }
  });

module.exports = transporter;