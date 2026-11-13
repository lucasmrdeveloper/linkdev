import type { Request, Response } from "express"
import PerfilModel from "./perfil.model"

import { 
    buscarPerfilService,
    criarPerfilService
} from "./perfil.service"

export const buscarPerfil = async (_req: Request, res: Response) => {
    const perfil = await buscarPerfilService()
    
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

    const perfil = await criarPerfilService(req.body)
    return res.status(201).json(perfil)
}

export const editarPerfil = async (req: Request, res: Response) => {
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

    const perfil = await PerfilModel.findOneAndUpdate(
        {},
        { nome, especialidade, localidade, biografia },
        {
            new: true,
            runValidators: true
        }
    )

    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe, crie o antes de editar"
        })
    }

    return res.json(perfil)
}