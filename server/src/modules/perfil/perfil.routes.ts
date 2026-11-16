import { Router } from "express"

import {
    buscarPerfil,
    criarPerfil,
    editarPerfil,
    atualizarFotoPerfil 
} from "./perfil.controller"

import uploadFoto from "./uploadFoto"

const perfilRoutes = Router()

perfilRoutes.get("/", buscarPerfil)
perfilRoutes.post("/", criarPerfil)
perfilRoutes.put("/", editarPerfil)
perfilRoutes.post(
    "/foto", 
    uploadFoto.single("foto"),
    atualizarFotoPerfil
)

export default perfilRoutes