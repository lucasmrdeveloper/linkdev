import { Router } from "express"
import LinksModel from "./links.model"

const linksRoutes = Router()

linksRoutes.get("/", async (_, res) => {
    const links = await LinksModel.find()

    if (!links) {
        res.status(404).json({ mensagem: "Não existe nenhum link."})
    }

    return res.json(links)
})

linksRoutes.post("/", async (req, res) => {
    const { rede, descricao, url } = req.body

    if (
        typeof rede !== "string" ||
        typeof descricao !== "string" ||
        typeof url !== "string"
    ) {
        res.status(400).json({ mensagem: "rede, descricao e url precisam ser strings" })
    }

    const link = await LinksModel.create({
        rede,
        descricao,
        url
    })

    return res.status(200).json({ recebido: req.body })
})

export default linksRoutes