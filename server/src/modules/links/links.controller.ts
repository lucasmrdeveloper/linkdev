import { Request, Response } from "express"
import LinksModel from "./links.model"

export const buscarLinks = async (_req: Request, res: Response) => {
    const links = await LinksModel.find()
    
    if (!links) {
        res.status(404).json({ mensagem: "Não existe nenhum link."})
    }
    
    return res.json(links)
}