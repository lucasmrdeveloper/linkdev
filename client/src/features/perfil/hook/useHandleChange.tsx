import { useContext, type ChangeEvent } from "react"
import { PerfilRascunhoContext} from "../../../shared/contexts/perfilRascunhoContext"

    
export const useHandleChange = (campo: string) => {
    const contexto = useContext(PerfilRascunhoContext)

    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }
    
    const { perfil, setPerfil } = contexto

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target

        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [campo]: value
        })) 
    }

    return { perfil, handleChange}
} 