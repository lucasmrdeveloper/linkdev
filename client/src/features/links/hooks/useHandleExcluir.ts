import { useLinkContexto } from "./useLinkContexto"

export const useHandleExcluir = () => {
    const { setLinks } = useLinkContexto()

    return (indice: number) => {
        setLinks(atual => 
            atual.filter((_, i) => i !== indice )
        ) 
    }
}