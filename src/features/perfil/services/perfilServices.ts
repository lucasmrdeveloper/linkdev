const API_URL = "http://localhost:3000/perfil"

export const buscarPerfil = async () => {
    const resposta = await fetch(API_URL)
    const dados = await resposta.json()

    return dados
}