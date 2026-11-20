import { Router } from "express"

import { 
    cadastrar,
    entrar 
} from "./auth.controller"

const authRoutes = Router()

authRoutes.post("/cadastro", cadastrar)
authRoutes.post("/login", entrar)


export default authRoutes