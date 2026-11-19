import type { Request, Response } from "express"
import { criarUsuarioService } from "./auth.service"

const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const erroDeEmailDuplicado = (error: unknown) =>
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000

export const cadastrar = async (req: Request, res: Response) => {
    const { email, senha } = req.body

    if (typeof email !== "string" || typeof senha !== "string") {
        return res.status(400).json({
            mensagem: "Informe email e senha como texto."
        })
    }

    const emailFormatado = email.trim().toLowerCase() 

    if (!emailValido.test(emailFormatado)) {
        return res.status(400).json({
            mensagem: "Informe um email válido"
        })
    }

    if (senha.length < 8) {
        return res.status(400).json({
            mensagem: "A senha precisa ter pelo menos 8 caracteres."
        })
    }

    try {
        const usuario = await criarUsuarioService(emailFormatado, senha)

        return res.status(201).json({
            id: usuario._id.toString(),
            email: usuario.email
        })
    }
    catch (error) {
        if (erroDeEmailDuplicado(error)) {
            return res.status(409).json({
                mensagem: "Já existe uma conta com este email."
            })
        }

        throw error
    }
}