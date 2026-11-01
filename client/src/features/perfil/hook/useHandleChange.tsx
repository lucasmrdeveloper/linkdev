import { type ChangeEvent } from "react"
import usePerfilContexto from "./usePerfilContexto"
    
export const useHandleChange = (campo: string) => {
    const { perfil, setPerfil } = usePerfilContexto()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target

        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [campo]: value
        })) 
    }

    return { perfil, handleChange}
} 