import { useEffect, useState } from "react"
import { buscarPerfil } from "../services/perfilServices"
import usePerfilContexto from "./usePerfilContexto"

export const useBuscarPerfil = () => {
    const { setPerfil, setPerfilAPI } = usePerfilContexto()
    const [carregamentoPerfil, setCarregamentoPerfil] = useState(true)
    const [erro, setErro] = useState("")

    useEffect(() => {
        const carregarPerfil = async () => {
            try {
                const dados = await buscarPerfil()
                setPerfil(dados)
                setPerfilAPI(dados)
            }
            catch {
                setErro(`Houve um erro ao carregar o perfil.`)
            }
            finally {
                setCarregamentoPerfil(false)
            }
        }

        carregarPerfil()
    }, [])

    return { carregamentoPerfil, erro }
}