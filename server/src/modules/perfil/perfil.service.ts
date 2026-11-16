import PerfilModel from "./perfil.model"

export type DadosPerfil = {
    nome: string
    especialidade: string
    localidade: string
    biografia: string
}

export const buscarPerfilService = async () => await PerfilModel.findOne()

export const criarPerfilService = async (dados: DadosPerfil) => 
    await PerfilModel.create(dados)

export const editarPerfilService = async (dados: DadosPerfil) => {
    return await PerfilModel.findOneAndUpdate(
        {},
        { $set: dados },
        {
            new: true,
            runValidators: true
        }
    )   
}

export const atualizarFotoPerfilService = async (
    fotoURL: string,
    fotoPublic: string
) => {
    return await PerfilModel.findOneAndUpdate(
        {},
        {
            $set: { fotoURL, fotoPublic }
        },
        {
            new: true,
            runValidators: true
        }
    )
}