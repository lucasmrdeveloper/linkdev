import { useContext } from "react"
import { PerfilContext } from "../../../shared/contexts/perfilContext"

const usePerfilContexto = () => {
    const contexto = useContext(PerfilContext)
    
    if (!contexto) {
        throw new Error("O contexto não existe")
    }

    return { ...contexto }
}

export default usePerfilContexto