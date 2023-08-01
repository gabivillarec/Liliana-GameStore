const {User} = require ("../db");

const createUser = async (req,res)=>{

    try {

        const {name,username,email,password,cp,address,phone,avatar_img,admin} = req.body

        if(username && email){

            const [register, created] = await User.findOrCreate({
                where : {username , email},
                default: {name,password,cp,address,phone,avatar_img,admin}
            });

            if(created){

                const response = {
                    name: register.name,
                    username: register.username,
                    email: register.email,
                    password: register.password,
                    cp: register.cp,
                    address: register.address,
                    phone: register.phone,
                    avatar_img: register.avatar_img,
                }

                return res.json(response)
            } else {
                return res.status(400).send("The user already exists, try another one")
            }
        };
        return res.status(400).send("email and username are require")
    } catch (error) {
        return res.status(500).json({error: error.message})
    };

};

module.exports = createUser;
