import { Router } from "express"

import { 
    buscarHabilidades, 
    criarHabilidade,
    excluirHabilidade
} from "./habilidades.controller"

const habilidadesRoutes = Router()

habilidadesRoutes.get("/", buscarHabilidades)
habilidadesRoutes.post("/", criarHabilidade)
habilidadesRoutes.delete("/:id", excluirHabilidade)

export default habilidadesRoutes