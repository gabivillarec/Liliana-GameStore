const { Router } = require('express');
const login = require('../Controllers/login');
const getAllUsers = require('../Controllers/getAllUsers');
const createUser = require('../Controllers/createUser');
const getUserById = require('../Controllers/getUserById');
const updateUsers = require('../Controllers/updateUsers');
const deleteUser = require('../Controllers/deleteUser');
const getUserByEmail = require('../Controllers/getUserByEmail')

const userRoutes = Router();

userRoutes.post("/login", login);

userRoutes.get("/user" , getAllUsers);

userRoutes.get("/user/:id" , getUserById);

userRoutes.get('/user/email/:email', getUserByEmail);

userRoutes.post("/user" , createUser);

userRoutes.put("/user/:id" , updateUsers);

userRoutes.delete("/user/:id" , deleteUser);


module.exports = userRoutes;