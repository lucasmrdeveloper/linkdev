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
    await PerfilModel.findOneAndUpdate(
        {},
        { dados },
        {
            new: true,
            runValidators: true
        }
    )   
}

export const atualizarFotoPerfilService = async (
    fotoURL: string,
    fotoPublicId: string
) => {
    return await PerfilModel.findOneAndUpdate(
        {},
        {
            $set: { fotoURL, fotoPublicId }
        },
        {
            new: true,
            runValidators: true
        }
    )
}