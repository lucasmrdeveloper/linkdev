import { Request, Response } from "express"
import LinksModel from "./links.model"

export const buscarLinks = async (_req: Request, res: Response) => {
    const links = await LinksModel.find()
    
    if (!links) {
        res.status(404).json({ mensagem: "Não existe nenhum link."})
    }
    
    return res.json(links)
}

export const criarLink = async (req: Request, res: Response) => {
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
}