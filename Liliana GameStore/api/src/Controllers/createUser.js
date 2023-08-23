const transporter = require("../configMail")
const { Users } = require("../db");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, cp, address, phone, avatar_img, admin, master, disabled } = req.body;

    if (username && email) {
      const saltRounds = 10; // Número de rondas de cifrado
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const [register, created] = await Users.findOrCreate({
        where: { username, email },
        defaults: { username, email, first_name, last_name, password: hashedPassword, cp, address, phone, avatar_img, admin, master, disabled },
      });

      if (created) {
        const response = {
          id: register.id,
          first_name: register.first_name,
          last_name : register.last_name,
          username: register.username,
          email: register.email,
          password: register.password,
          cp: register.cp,
          address: register.address,
          phone: register.phone,
          avatar_img: register.avatar_img,
          admin: register.admin,
          master: register.master,
          disabled: register.disabled
        };

        await transporter.sendMail({
          from: '"Liliana Games Store" <nicorojaselcapo@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Bienvenido!", // Subject line
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>register</title><!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
          <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
          .rollover:hover .rollover-first {
          max-height:0px!important;
          display:none!important;
          }
          .rollover:hover .rollover-second {
          max-height:none!important;
          display:block!important;
          }
          .rollover div {
          font-size:0;
          }
          u ~ div img + div > div {
          display:none;
          }
          #outlook a {
          padding:0;
          }
          span.MsoHyperlink,
          span.MsoHyperlinkFollowed {
          color:inherit;
          mso-style-priority:99;
          }
          a.es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-header-body a:hover {
          color:#e2cfea!important;
          }
          .es-content-body a:hover {
          color:#e2cfea!important;
          }
          .es-footer-body a:hover {
          color:#e2cfea!important;
          }
          .es-infoblock a:hover {
          color:#cccccc!important;
          }
          .es-button-border:hover > a.es-button {
          color:#ffffff!important;
          }
          @media only screen and (max-width:600px) {.es-m-p10b { padding-bottom:10px!important } .es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p20l { padding-left:20px!important } .es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:46px!important; text-align:left } h2 { font-size:28px!important; text-align:left } h3 { font-size:20px!important; text-align:center } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:46px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important } a.es-button, button.es-button { display:inline-block!important } .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .img-1390 { height:105px!important } }
          </style>
          </head>
          <body style="width:100%;height:100%;padding:0;Margin:0">
          <div class="es-wrapper-color" style="background-color:#102B3F"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#102b3f"></v:fill>
          </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#102B3F">
          <tr>
          <td valign="top" style="padding:0;Margin:0">
          <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
          <tr>
          <td align="center" style="padding:0;Margin:0;background-image:url(https://xwnunb.stripocdn.email/content/guids/e3e49242-9d24-487b-a300-6604a55f3101/images/ps_background_medium.png);background-repeat:no-repeat;background-position:center top;background-size:cover" background="https://xwnunb.stripocdn.email/content/guids/e3e49242-9d24-487b-a300-6604a55f3101/images/ps_background_medium.png">
          <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
          <tr>
          <td class="es-m-p10b" align="left" style="padding:0;Margin:0;padding-top:20px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:600px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://lilianagamesstore.onrender.com" style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:16px"><img src="https://xwnunb.stripocdn.email/content/guids/CABINET_4b661d8a6f708ef25184d85710414ac0d3f74c48172cc71ba3c5acb79535e988/images/lilianagamestore.png" alt="Logo" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none" title="Logo" height="120" class="img-1390"></a></td>
          </tr>
          <tr>
          <td align="center" style="padding:20px;Margin:0;font-size:0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:none;height:1px;width:100%;margin:0px"></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><h1 style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:normal;line-height:55px;color:#73dff1">Bienvenido!</h1></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td class="es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:30px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:10px" role="presentation">
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:1px;width:100%;margin:0px"></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h2 style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:34px;color:#ffffff">Hola ${first_name} ${last_name},</h2><p style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#E2CFEA;font-size:16px"><br></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px">Su cuenta en Liliana Games Store fue creada de manera exitosa. Gracias por registrarte en nuestra pagina!</p></td>
          </tr>
          <tr>
          <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
          <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:1px;width:100%;margin:0px"></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td class="es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-bottom:40px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://localhost:5173" target="_blank" hidden>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://localhost:5173"
          style="height:41px; v-text-anchor:middle; width:106px" arcsize="0%" stroke="f" fillcolor="#a06cd5">
          <w:anchorlock></w:anchorlock>
          <center style='color:#ffffff; font-family:Barlow, sans-serif; font-size:15px; font-weight:400; line-height:15px; mso-text-raise:1px'>Ir al sitio</center>
          </v:roundrect></a>
          <![endif]--><!--[if !mso]--><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#2CB543;background:#A06CD5;border-width:0px;display:inline-block;border-radius:0px;width:auto;mso-hide:all"><a href="https://lilianagamesstore.onrender.com" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:10px 20px 10px 20px;display:inline-block;background:#A06CD5;border-radius:0px;font-family:Barlow, sans-serif;font-weight:normal;font-style:normal;line-height:22px !important;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #A06CD5">Ir al sitio</a></span><!--<![endif]--></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td class="es-m-p10b es-m-p20r es-m-p20l" align="left" style="padding:0;Margin:0;padding-top:20px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:600px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#E2CFEA;font-size:16px">Copyright © 2023 -&nbsp;&nbsp;LilianaGamesStore. Argentina.</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" height="40" style="padding:0;Margin:0"></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-right:20px;padding-left:20px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" height="40" style="padding:0;Margin:0"></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          </div>
          </body>
          </html>`, // html body
        });  

        return res.json(response);
      } else {
        return res.status(400).send("The user already exists, try another one");
      }
    }

    return res.status(400).send("email and username are required");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createUser;
