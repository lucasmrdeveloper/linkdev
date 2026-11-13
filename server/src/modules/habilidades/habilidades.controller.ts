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