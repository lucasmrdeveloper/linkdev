import PerfilModel from "./perfil.model"

export const buscarPerfilService = async () => await PerfilModel.findOne()
