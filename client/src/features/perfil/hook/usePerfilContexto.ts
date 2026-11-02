import { useContext } from "react"
import { PerfilRascunhoContext } from "../../../shared/contexts/perfilRascunhoContext"

const usePerfilContexto = () => {
    const contexto = useContext(PerfilRascunhoContext)
    
    if (!contexto) {
        throw new Error("O contexto não existe")
    }

    return { ...contexto }
}

export default usePerfilContexto