import type { Request, Response } from "express"
import cloudinary from "../../../config/cloudinary"

import { 
    buscarPerfilService,
    criarPerfilService,
    editarPerfilService,
    atualizarFotoPerfilService,
    DadosPerfil
} from "./perfil.service"

const dadosPerfilValidos = (dados: unknown): dados is DadosPerfil => {
    if (typeof dados !== "object" || dados === null) return false
    
    return (
        "nome" in dados &&
        typeof dados.nome === "string" &&
        "especialidade" in dados &&
        typeof dados.especialidade === "string" &&
        "localidade" in dados &&
        typeof dados.localidade === "string" &&
        "biografia" in dados &&
        typeof dados.biografia === "string"
    )
}

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
    if (!dadosPerfilValidos(req.body)) {
        return res.status(400).json({
            mensagem: "nome, especialidade, localidade e biografia precisam ser strings"
        })
    }

    const perfil = await criarPerfilService(req.body)
    return res.status(201).json(perfil)
}

export const editarPerfil = async (req: Request, res: Response) => {
    if (!dadosPerfilValidos(req.body)) {
        return res.status(400).json({
            mensagem: "nome, especialidade, localidade e biografia precisam ser strings"
        })
    }

    const perfil = editarPerfilService(req.body) 

    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe, crie o antes de editar"
        })
    }

    return res.json(perfil) 
}

export const atualizarFotoPerfil = async (req: Request, res: Response) => {
    const arquivo = req.file

    if (!arquivo) {
        return res.status(400).json({
            mensagem: "Envie uma imagem no campo foto"
        })
    }

    const resultado = await new Promise<{
        secure_url: string
        public_id: string
    }>((resolve, reject) => {
        cloudinary.uploader
        .upload_stream(
            { folder: "linkdev/perfis", resource_type: "image" },
            (erro, resposta) => {
            if (erro) return reject(erro)
            if (!resposta) return reject(new Error("O Cloudinary não retornou a imagem."))

            resolve({
                secure_url: resposta.secure_url,
                public_id: resposta.public_id
            })
            }
        )
        .end(arquivo.buffer)
    })

    const perfil = await atualizarFotoPerfilService(
        resultado.secure_url,
        resultado.public_id
    )

    if (!perfil) {
        return res.status(404).json({ mensagem: "Perfil não encontrado." })
    } 

    return res.json(perfil)
}