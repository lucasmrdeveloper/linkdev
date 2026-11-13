import { Router } from "express"
import HabilidadeModel from "./habilidades.model"

import { 
    buscarHabilidades, 
    criarHabilidades
} from "./habilidades.controller"

const habilidadesRoutes = Router()

habilidadesRoutes.get("/", buscarHabilidades)
habilidadesRoutes.post("/", criarHabilidades)

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