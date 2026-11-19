import { Router } from "express"

import { cadastrar } from "./auth.controller"

const authRoutes = Router()

authRoutes.post("/cadastro", cadastrar)

export default authRoutes