import HabilidadeModel from "./habilidades.model"

type dadoHabilidade = {
    nome: string
}

export const buscarHabilidadesService = async () => await HabilidadeModel.find()

export const criarHabilidadeService = async (dados: dadoHabilidade) => 
    await HabilidadeModel.create(dados) 

export const excluirHabilidadeService = async (id: string) => 
    await HabilidadeModel.findByIdAndDelete(id)