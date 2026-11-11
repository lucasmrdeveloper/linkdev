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