import { Router } from "express"
import PerfilModel from "./perfil.model"

const perfilRoutes = Router()

perfilRoutes.get("/", async (_req, res) => {
    const perfil = await PerfilModel.findOne()

    if (!perfil) {{
        return res.status(404).json({
            mensagem: "Perfil não existe"
        })
    }}

    return res.json(perfil)
})

export default perfilRoutes