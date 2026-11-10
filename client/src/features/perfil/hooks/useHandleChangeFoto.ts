import { useState, useEffect, type ChangeEvent } from "react"

export const useHandleChangeFoto = (setPreview) => {
    const [arquivo, setArquivo] = useState<File | null>(null)

    useEffect(() => {
        if (!arquivo) {
            setPreview("/user.png")
            return
        }

        const url = URL.createObjectURL(arquivo)
        setPreview(url)

        return () => URL.revokeObjectURL(url)
    }, [arquivo]) 

    return (e: ChangeEvent<HTMLInputElement>) => {
        const selecionado = e.target.files?.[0]
    
        if (selecionado) setArquivo(selecionado)
    }
}