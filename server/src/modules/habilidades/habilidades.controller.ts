import type { Request, Response } from "express"

import { 
    buscarHabilidadesService,
    criarHabilidadesService,
    excluirHabilidadesService 
} from "./habilidades.service"

export const buscarHabilidades = async (_req: Request, res: Response) => {
    const habilidades = await buscarHabilidadesService()

    return res.json(habilidades)
}

export const criarHabilidades = async (req: Request, res: Response) => {
    const { nome } = req.body

    if ( typeof nome !== "string" ) {
        return res.status(400).json({
            mensagem: "nome precisa ser uma string"
        })
    }

    const habilidade = await criarHabilidadesService(req.body)
    return res.status(201).json(habilidade)
}

export const excluirHabilidades = async (req: Request, res: Response) => {
    const id = req.params.id

    if (typeof id !== "string") {
        return res.status(400).json({ 
            mensagem: "ID Inválido" 
        })
    } 

    const habilidade = await excluirHabilidadesService(id)

    if (!habilidade) {
        return res.status(404).json({
            mensagem: "Habilidade não encontrada"
        })
    }

    return res.status(204).send()
}