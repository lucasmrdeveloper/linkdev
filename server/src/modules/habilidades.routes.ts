import { Router } from "express"
import HabilidadeModel from "./habilidades.model"


const habilidadesRoutes = Router()

habilidadesRoutes.get("/", async (req, res) => {
    const habilidades = await HabilidadeModel.find()

    if (!habilidades) {
        return res.status(404).json({
            mensagem: "Habilidades não existem"
        })
    }

    return res.json(habilidades)
})

habilidadesRoutes.post("/", async (req, res) => {
    const { nome } = req.body

    if ( typeof nome !== "string" ) {
        return res.status(400).json({
            mensagem: "nome precisa ser uma string"
        })
    }

    const habilidade = await HabilidadeModel.create({
        nome
    })

    return res.status(201).json(habilidade)
})

export default habilidadesRoutes