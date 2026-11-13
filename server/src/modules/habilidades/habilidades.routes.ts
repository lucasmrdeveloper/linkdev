import { Router } from "express"
import HabilidadeModel from "./habilidades.model"

import { 
    buscarHabilidades, 
    criarHabilidades,
    excluirHabilidades
} from "./habilidades.controller"

const habilidadesRoutes = Router()

habilidadesRoutes.get("/", buscarHabilidades)
habilidadesRoutes.post("/", criarHabilidades)
habilidadesRoutes.delete("/:id", excluirHabilidades)

export default habilidadesRoutes