import { Router } from "express";
import { loginUsuario } from "../controllers/usuarios.controller.js";

const router = Router()

//Creo las rutas

router.post('/', loginUsuario)

export default router;