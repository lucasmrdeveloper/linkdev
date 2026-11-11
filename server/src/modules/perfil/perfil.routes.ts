import { Router } from "express"

import {
    buscarPerfil,
    criarPerfil,
    editarPerfil 
} from "./perfil.controller"

const perfilRoutes = Router()

perfilRoutes.get("/", buscarPerfil)
perfilRoutes.post("/", criarPerfil)
perfilRoutes.put("/", editarPerfil)

export default perfilRoutes