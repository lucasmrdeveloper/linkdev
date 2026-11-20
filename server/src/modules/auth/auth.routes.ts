import { Router } from "express"

import { 
    cadastrar,
    entrar,
    obterUsuarioAtual 
} from "./auth.controller"

import { exigirAutenticacao } from "./auth.middleware"

const authRoutes = Router()

authRoutes.get("/me", exigirAutenticacao, obterUsuarioAtual)
authRoutes.post("/cadastro", cadastrar)
authRoutes.post("/login", entrar)


export default authRoutes