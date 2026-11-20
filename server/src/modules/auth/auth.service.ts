import bcrypt from "bcryptjs"
import UsuarioModel from "./usuario.model"

export const criarUsuarioService = async (email: string, senha: string) => {
    const senhaHash = await bcrypt.hash(senha, 12)

    return UsuarioModel.create({
        email,
        senhaHash
    })
}

export const autenticarUsuarioService = async (email: string, senha: string) => {
    const usuario = await UsuarioModel
        .findOne({ email })
        .select("+senhaHash")

    if (!usuario) return null

    const senhaCorreta = await bcrypt.compare(senha, usuario.senhaHash)

    if (!senhaCorreta) return null

    return usuario
}