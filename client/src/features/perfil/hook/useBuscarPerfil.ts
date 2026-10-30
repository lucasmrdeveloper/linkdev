import { buscarPerfil } from "../services/perfilServices"
import { PerfilRascunhoContext } from "../../../shared/contexts/perfilRascunhoContext"
import { useContext , useEffect} from "react"

export const useBuscarPerfil = () => {

    const contexto = useContext(PerfilRascunhoContext)

    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }
    
    const { setPerfil } = contexto

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