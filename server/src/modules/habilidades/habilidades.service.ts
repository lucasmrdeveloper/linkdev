import HabilidadeModel from "./habilidades.model"

type dadoHabilidade = {
    nome: string
}

export const buscarHabilidadesService = async () => await HabilidadeModel.find()

export const criarHabilidadesService = async (dados: dadoHabilidade) => 
    await HabilidadeModel.create(dados) 

