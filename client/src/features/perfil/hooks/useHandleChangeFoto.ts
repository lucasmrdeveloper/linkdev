import { 
    useState, 
    useEffect, 
    type ChangeEvent,
    type Dispatch,
    type SetStateAction 
} from "react"

export const useHandleChangeFoto = (
    setPreview: Dispatch<SetStateAction<string>>
) => {
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