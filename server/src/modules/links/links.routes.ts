import { Router } from "express"
import LinksModel from "./links.model"

import { 
    buscarLinks,
    criarLink,
    editarLink,
    excluirLink
} from "./links.controller"

const linksRoutes = Router()

linksRoutes.get("/", buscarLinks)
linksRoutes.post("/", criarLink)
linksRoutes.patch("/:id", editarLink)
linksRoutes.delete("/:id", excluirLink)

export default linksRoutes