import { Request, Response } from "express"
import LinksModel from "./links.model"

import { 
    buscarLinksService,
    criarLinkService
} from "./links.service"

const dadosLinkValidos = (dados: unknown) => {
    if (typeof dados !== "object" || dados === null) {
        return false
    }

    return (
        "icone" in dados &&
        typeof dados.icone === "string" &&
        "nome" in dados &&
        typeof dados.nome === "string" &&
        "descricao" in dados &&
        typeof dados.descricao === "string" &&
        "url" in dados &&
        typeof dados.url === "string"
    )
}

export const buscarLinks = async (_req: Request, res: Response) => {
    const links = await buscarLinksService()

    return res.json(links)
}

export const criarLink = async (req: Request, res: Response) => {
    if (!dadosLinkValidos(req.body)) {
        return res.status(400).json({ 
            mensagem: "Envie os campos válidos" 
        })
    } 

    const link = await criarLinkService(req.body)
    return res.status(201).json(link)
}

export const editarLink = async (req: Request, res: Response) => {
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
}

export const excluirLink = async (req: Request, res: Response) => {
    const link = await LinksModel.findByIdAndDelete(req.params.id)
    
    if (!link) {
        return res.status(404).json({ mensagem: "O id não foi encontrado" })
    }
    
    return res.status(204).send()
}