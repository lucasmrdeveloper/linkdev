import { useEffect, useState } from "react"
import { buscarPerfil } from "../services/perfilServices"
import usePerfilContexto from "./usePerfilContexto"

export const useBuscarPerfil = () => {
    const { setPerfil } = usePerfilContexto()
    const [carregamentoPerfil, setCarregamentoPerfil] = useState(true)

    useEffect(() => {
        const carregarPerfil = async () => {
            try {
                const dados = await buscarPerfil()
                setPerfil(dados)
            }
            catch (error) {
                console.error("Houve um erro ao fazer a requisição")
            }
            finally {
                setCarregamentoPerfil(false)
            }
        }

        carregarPerfil()
    }, [])

    return { carregamentoPerfil }
}