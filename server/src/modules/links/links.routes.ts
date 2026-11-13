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

linksRoutes.patch("/:id", async (req, res) => {
    const camposPermitidos = ["icone", "nome", "descricao", "url"] as const
    const atualizacoes: Record<string, string> = {}

    for (const campo of camposPermitidos) {
        if (campo in req.body) {
            if (typeof req.body[campo] !== "string") {
                return res.status(400).json({
                    mensagem: `${campo} precisa ser uma string`
                })
            }

            atualizacoes[campo] = req.body[campo]
        }
    }

    if (Object.keys(atualizacoes).length === 0) {
        return res.status(400).json({
            mensagem: "Envie pelo menos um campo para atualizar"
        })
    }

    const link = await LinksModel.findByIdAndUpdate(
        req.params.id,
        { $set: atualizacoes },
        { new: true, runValidators: true }
    )

    if (!link) {
        return res.status(404).json({ mensagem: "Link não encontrado" })
    }

    return res.json(link)
})

linksRoutes.post("/", async (req, res) => {
    const { icone, nome, descricao, url } = req.body

    if (
        typeof icone !== "string" ||
        typeof nome !== "string" ||
        typeof descricao !== "string" ||
        typeof url !== "string"
    ) {
        return res.status(400).json({ mensagem: "icone, descricao e url precisam ser strings" })
    }

    const link = await LinksModel.create({
        icone,
        nome,
        descricao,
        url
    })

    return res.status(200).json({link})
})

linksRoutes.delete("/:id", async (req, res) => {
    const link = await LinksModel.findByIdAndDelete(req.params.id)

    if (!link) {
        return res.status(404).json({ mensagem: "O id não foi encontrado" })
    }

    return res.status(204).send()
})

export default linksRoutes