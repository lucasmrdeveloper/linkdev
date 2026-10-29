import type { Habilidade } from "../../../shared/contexts/habilidadesRascunhoContext"

const API_URL = "http://localhost:3000/habilidades"

export const criarHabilidade = async (habilidades)=> {
    console.log("=====criarHabilidaes=====")
    console.log("habilidades", habilidades)

    const resposta = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(habilidades)
    })

    if (!resposta.ok) {
        throw new Error("Houve um erro ao criar a nova habilidade")
    }

    const dados = await resposta.json()

    return dados
}

export const buscarHabilidades = async (): Promise<Habilidade[]> => {
    const resposta = await fetch(API_URL)

    if (!resposta){
        throw new Error("Não foi possível realizar a busca das habilidades")
    }

    const dados = resposta.json()

    return dados
}