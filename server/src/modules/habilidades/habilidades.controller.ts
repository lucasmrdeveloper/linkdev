import type { Request, Response } from "express"
import HabilidadeModel from "./habilidades.model"

export const buscarHabilidades = async (_req: Request, res: Response) => {
    const habilidades = await HabilidadeModel.find()

    if (!habilidades) {
        return res.status(404).json({
            mensagem: "Habilidades não existem"
        })
    }

    return res.json(habilidades)
}

export const criarHabilidades = async (req: Request, res: Response) => {
    const { nome } = req.body
    
    if ( typeof nome !== "string" ) {
        return res.status(400).json({
            mensagem: "nome precisa ser uma string"
        })
    }

    const habilidade = await HabilidadeModel.create({
        nome
    })

    return res.status(201).json(habilidade)
}

export const excluirHabilidades = async (req: Request, res: Response) => {
    const habilidade = await HabilidadeModel.findByIdAndDelete(req.params.id)
    
    if (!habilidade) {
        return res.status(404).json({
            mensagem: "Habilidade não encontrada"
        })
    }

    return res.status(204).send()
}