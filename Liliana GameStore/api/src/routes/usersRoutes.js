const { Router } = require('express');
const login = require('../Controllers/login');
const getAllUsers = require('../Controllers/getAllUsers');
const createUser = require('../Controllers/createUser');
const getUserById = require('../Controllers/getUserById');
const updateUsers = require('../Controllers/updateUsers');
const deleteUser = require('../Controllers/deleteUser');

const userRoutes = Router();

userRoutes.get("/login", login);

userRoutes.get("/user" , getAllUsers);

userRoutes.get("/user/:id" , getUserById);

userRoutes.post("/user" , createUser);

userRoutes.put("/user/:id" , updateUsers);

userRoutes.delete("/user/:id" , deleteUser);

module.exports = userRoutes;