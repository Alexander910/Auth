import UserService from "./user.service.js";
import type { Request, Response } from "express";
const userService = new UserService();

//el usuario tiene que estar authenticado para poder utilizar esto
async function currentUser(req:any, res:any) {
    // Lógica para iniciar sesión
    const id = req.user.id; // Suponiendo que el email del usuario autenticado está disponible en req.user
    const user = await userService.getCurrentUser(id);

    if (user) {
        const userResponse = user.toObject();
        delete userResponse.password;
        res.status(200).json(userResponse);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
}

export {
    currentUser,
}