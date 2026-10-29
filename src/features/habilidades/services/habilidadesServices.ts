import type { Habilidade } from "../../../shared/contexts/habilidadesRascunhoContext"

const API_URL = "http://localhost:3000/habilidades"

export const criarHabilidade = async () => {

}

export const buscarHabilidades = async (): Promise<Habilidade[]> => {
    const resposta = await fetch(API_URL)

    if (!resposta){
        throw new Error("Não foi possível realizar a busca das habilidades")
    }

    const dados = resposta.json()

    return dados
}