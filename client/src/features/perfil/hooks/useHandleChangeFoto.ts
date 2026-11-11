import {
    useEffect, 
    type ChangeEvent,
    type Dispatch,
    type SetStateAction 
} from "react"

import usePerfilContexto from "./usePerfilContexto"

export const useHandleChangeFoto = (
    setPreview: Dispatch<SetStateAction<string>>
) => {
    const { fotoPerfil, setFotoPerfil } = usePerfilContexto()

    useEffect(() => {
        if (!fotoPerfil) {
            setPreview("/user.png")
            return
        }

        const url = URL.createObjectURL(fotoPerfil)
        setPreview(url)

        return () => URL.revokeObjectURL(url)
    }, [fotoPerfil]) 

    return (e: ChangeEvent<HTMLInputElement>) => {
        const selecionado = e.target.files?.[0]
    
        if (selecionado) setFotoPerfil(selecionado)
    }
}