import { useContext } from "react"
import { PerfilRascunhoContext } from "../../../shared/contexts/perfilRascunhoContext"

const usePerfilContexto = () => {
    const contexto = useContext(PerfilRascunhoContext)
    
    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }
    
    const { perfil, setPerfil } = contexto

    return { perfil, setPerfil }
}

export default usePerfilContexto