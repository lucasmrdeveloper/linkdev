import type { Perfil } from "../../../shared/contexts/perfilContext"

const API_URL = "http://localhost:8000/api/perfil"

export const buscarPerfil = async () => {
    const resposta = await fetch(API_URL) 

    if (!resposta.ok) {
        throw new Error("Não foi possível buscar o perfil")
    }

    const dados = await resposta.json()

    return dados
}


export const editarPerfil = async (perfil: Perfil) => {
    const resposta = await fetch(API_URL, {
        method: "PUT", 

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(perfil)
    })

    if(!resposta.ok) {
        throw new Error("Houve um erro")
    }

    const dados = resposta.json()

    return  dados
}