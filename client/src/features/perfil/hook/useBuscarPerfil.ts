import { buscarPerfil } from "../services/perfilServices"
import { useEffect } from "react"
import usePerfilContexto from "./usePerfilContexto"

export const useBuscarPerfil = () => {
    const { setPerfil } = usePerfilContexto()

    useEffect(() => {
        const carregarPerfil = async () => {
            try{
                const dados = await buscarPerfil()
                setPerfil(dados)
            }
            catch(error){
                console.error("Houve um erro ao fazer a requisição")
            }
        }

        carregarPerfil()
    }, [])
}