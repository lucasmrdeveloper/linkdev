import type { Request, Response } from "express"
import { 
    criarUsuarioService,
    autenticarUsuarioService 
} from "./auth.service"

import jwt from "jsonwebtoken"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const erroDeEmailDuplicado = (error: unknown) =>
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000

const dadosCadastroValidos = (dados: unknown) => {
    if (typeof dados !== "object" || dados === null) return false
    
    return (
        "email" in dados &&
        typeof dados.email === "string" &&
        "senha" in dados &&
        typeof dados.senha === "string"
    )
}

const emailNormalizado = (email: string) => 
    email.trim().toLowerCase() 

const emailValido = (email: string) => 
   emailRegex.test(email)


export const cadastrar = async (req: Request, res: Response) => {
    if (!dadosCadastroValidos(req.body)) {
        return res.status(400).json({
            mensagem: "Informe email e senha como textos."
        })
    } 

    const { email, senha } = req.body
    const emailFormatado = emailNormalizado(email)

    if (!emailValido(emailFormatado)) {
        return res.status(400).json({
            mensagem: "Informe um email válido."
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

export const entrar = async (req: Request, res: Response) => {
    if (!dadosCadastroValidos(req.body)) {
        return res.status(400).json({
            mensagem: "Informe email e senha como textos."
        })
    } 

    const { email, senha } = req.body
    const emailFormatado = emailNormalizado(email)

    if (!emailValido(emailFormatado)) {
        return res.status(400).json({
            mensagem: "Informe um email válido."
        })
    }

    const usuario = await autenticarUsuarioService(emailFormatado, senha) 

    if (!usuario) {
        return res.status(401).json({
            mensagem: "Email ou senha inválidos."
        })
    }

    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
        throw new Error("JWT_SECRET não foi definida no arquivo .env")
    }

    const token = jwt.sign(
        { sub: usuario._id.toString() },
        jwtSecret,
        { expiresIn: "1h" }
    )

    return res
        .cookie("devlink_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
            path: "/"
        })
        .json({
            id: usuario._id.toString(),
            email: usuario.email
        })
}