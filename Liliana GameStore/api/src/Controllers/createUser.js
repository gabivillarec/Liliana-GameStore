const { Users } = require("../db");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, cp, address, phone, avatar_img, admin } = req.body;

    if (username && email) {
      const saltRounds = 10; // Número de rondas de cifrado
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const [register, created] = await Users.findOrCreate({
        where: { username, email },
        defaults: { first_name, last_name, password: hashedPassword, cp, address, phone, avatar_img, admin },
      });

      if (created) {
        const response = {
          first_name: register.first_name,
          last_name : register.last_name,
          username: register.username,
          email: register.email,
          password: register.password,
          cp: register.cp,
          address: register.address,
          phone: register.phone,
          avatar_img: register.avatar_img,
          admin: register.admin
        };

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
