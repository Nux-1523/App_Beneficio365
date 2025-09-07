import express from "express";
import { getAllUsers,create, getUserById, updateUser, deleteUser } from "../controller/userController.js";

// Crear router
const route = express.Router();

// Crear un nuevo usuario
// POST http://localhost:8000/api/users
route.post("/users", create);
// Obtener todos los usuarios
// GET http://localhost:8000/api/users
route.get("/users", getAllUsers);
// Obtener un usuario por ID
// GET http://localhost:8000/api/users/:id
route.get("/users/:id", getUserById);
// Actualizar un usuario por ID
// PUT http://localhost:8000/api/users/:id
route.put("/update/users/:id", updateUser);
// Eliminar un usuario por ID
// DELETE http://localhost:8000/api/users/:id
route.delete("/delete/users/:id", deleteUser);

export default route;
