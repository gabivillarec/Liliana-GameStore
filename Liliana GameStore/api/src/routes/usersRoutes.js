const { Router } = require('express');
const createUser = require('../Controllers/createUser')
const login = require('../Controllers/login')

const userRoutes = Router();

userRoutes.get("/login", login);

//userRoutes.get("/user" , getAllUsers);

//userRoutes.get("/user/:id" , getUserById);

userRoutes.post("/user" , createUser);

//userRoutes.put("/user/:id" , updateUser);

//userRoutes.delete("/user/:id" , deleteUser);

module.exports = userRoutes;