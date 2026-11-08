import { useLinkContexto } from "./useLinkContexto"

export const useHandleIcone = () => {
    const { setLinks } = useLinkContexto()

    return (id: string , indice: number) => {
        setLinks(atuais => 
            atuais.map((item, i) => 
                i === indice ? { ...item, rede: id } : item
            )
        )
    } 
}