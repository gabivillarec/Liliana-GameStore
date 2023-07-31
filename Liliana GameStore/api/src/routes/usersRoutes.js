const { Router } = require('express');

const userRoutes = Router();

userRoutes.get("/user" , getAllUsers);

userRoutes.get("/user/:id" , getUserById);

userRoutes.post("/user" , createUser);

userRoutes.put("/user/:id" , updateUser);

userRoutes.delete("/user/:id" , deleteUser);

module.exports = userRoutes;