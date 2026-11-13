import HabilidadeModel from "./habilidades.model"

export const buscarHabilidadesService = async () => await HabilidadeModel.find()
