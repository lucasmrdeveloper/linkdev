import bcrypt from "bcryptjs"
import UsuarioModel from "./usuario.model"

export const criarUsuarioService = async (email: string, senha: string) => {
    const senhaHash = await bcrypt.hash(senha, 12)

    return UsuarioModel.create({
        email,
        senhaHash
    })
}