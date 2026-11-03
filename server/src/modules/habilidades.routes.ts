import { Router } from "express"

const habilidadesRoutes = Router()

habilidadesRoutes.get("/", async (req, res) => {
 
})

habilidadesRoutes.post("/", async (req, res) => {
    console.log("Body recebido em POST /api/habilidades:", req.body)

   
})

export default habilidadesRoutes