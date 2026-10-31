import { Router } from "express"
import PerfilModel from "./perfil.model"

const perfilRoutes = Router()

perfilRoutes.get("/", async (_req, res) => {
    const perfil = await PerfilModel.findOne()

    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe"
        })
    }

    return res.json(perfil)
})

perfilRoutes.post("/", async (req, res) => {
    const { nome, especialidade, localidade, biografia } = req.body ?? {}

    if (
        typeof nome !== "string" ||
        typeof especialidade !== "string" ||
        typeof localidade !== "string" ||
        typeof biografia !== "string"
    ) {
        return res.status(400).json({
            mensagem: "nome, especialidade, localidade e biografia precisam ser strings"
        })
    }

    const perfil = await PerfilModel.create({
        nome,
        especialidade,
        localidade,
        biografia
    })

    return res.status(201).json(perfil)
})

perfilRoutes.put("/", async (req, res) => {
    const { nome, especialidade, localidade, biografia } = req.body ?? {}

    if (
        typeof nome !== "string" ||
        typeof especialidade !== "string" ||
        typeof localidade !== "string" ||
        typeof biografia !== "string"
    ) {
        return res.status(400).json({
            mensagem: "nome, especialidade, localidade e biografia precisam ser strings"
        })
    }

    const perfil = await PerfilModel.findOneAndUpdate(
        {},
        { nome, especialidade, localidade, biografia },
        {
            new: true,
            runValidators: true
        }
    )

    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe, crie o antes de editar"
        })
    }

    return res.json(perfil)
})

export default perfilRoutes