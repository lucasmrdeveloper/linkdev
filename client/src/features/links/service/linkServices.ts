const API_URL = "http://localhost:8000/api/links"

export const buscarLinks = async () => {
    const resposta = await fetch(API_URL)

    if (!resposta.ok){
        throw new Error("Não foi possível realizar a busca dos links")
    }

    return resposta.json()
}