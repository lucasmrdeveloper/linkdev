import { Router } from "express"
import LinksModel from "./links.model"

import { 
    buscarLinks,
    criarLink,
    editarLink
} from "./links.controller"

const linksRoutes = Router()

linksRoutes.get("/", buscarLinks)
linksRoutes.post("/", criarLink)
linksRoutes.patch("/:id", editarLink)

linksRoutes.delete("/:id", async (req, res) => {
    const link = await LinksModel.findByIdAndDelete(req.params.id)

    if (!link) {
        return res.status(404).json({ mensagem: "O id não foi encontrado" })
    }

    return res.status(204).send()
})

export default linksRoutes