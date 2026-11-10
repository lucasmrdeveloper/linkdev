import { type ChangeEvent } from "react"
import usePerfilContexto from "./usePerfilContexto"
    
export const useHandleChangeCampos = (campo: string) => {
    const { perfil, setPerfil } = usePerfilContexto()

    const handleChangeCampo = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [campo]: e.target.value
        })) 
    }

    return { perfil, handleChangeCampo }
} 