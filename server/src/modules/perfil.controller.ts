import type { Request, Response } from "express"
import PerfilModel from "./perfil.model"

export const buscarPerfil = async (_req: Request, res: Response) => {
    const perfil = await PerfilModel.findOne()
    
    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe"
        })
    }
    
    return res.json(perfil)
}

export const criarPerfil = async (req: Request, res: Response) => {
    const { nome, especialidade, localidade, biografia } = req.body ?? {}
    
    if (
        typeof nome !== "string" ||
        typeof especialidade !== "string" ||
        typeof localidade !== "string" ||
        typeof biografia !== "string"
    ) {
        return res.status(400).json({
            mensagem: "nome, especialidade, localidade e biografia precisam ser strings"
        })
    }

    const perfil = await PerfilModel.create({
        nome,
        especialidade,
        localidade,
        biografia
    })

    return res.status(201).json(perfil)
}