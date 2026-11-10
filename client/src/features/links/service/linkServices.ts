const API_URL = "http://localhost:8000/api/links"

import type { Link } from "../../../shared/contexts/linksContext"

export const buscarLinks = async () => {
    const resposta = await fetch(API_URL)

    if (!resposta.ok){
        throw new Error("Não foi possível realizar a busca dos links")
    }

    return resposta.json()
}

export const atualizarLinks = async (
    id: string,
    alteracoes: Partial<Omit<Link, "_id">>
) => {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(alteracoes)
    })

    if (!resposta.ok) {
        throw new Error("Não foi possível atualizar")
    }

    return await resposta.json()
}