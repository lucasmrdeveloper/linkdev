import { Router } from "express"
import HabilidadeModel from "./habilidades.model"

import { 
    buscarHabilidades 
} from "./habilidades.controller"

const habilidadesRoutes = Router()

habilidadesRoutes.get("/", buscarHabilidades)

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

habilidadesRoutes.delete("/:id", async (req, res) => {
    const habilidade = await HabilidadeModel.findByIdAndDelete(req.params.id)

    if (!habilidade) {
        return res.status(404).json({
            mensagem: "Habilidade não encontrada"
        })
    }

    return res.status(204).send()
})

export default habilidadesRoutes