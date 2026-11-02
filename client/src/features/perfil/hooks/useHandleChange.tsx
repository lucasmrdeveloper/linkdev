import { type ChangeEvent } from "react"
import usePerfilContexto from "./usePerfilContexto"
    
export const useHandleChange = (campo: string) => {
    const { perfil, setPerfil } = usePerfilContexto()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [campo]: e.target.value
        })) 
    }

    return { perfil, handleChange }
} 