import type { Dispatch, SetStateAction } from "react"
import type { Link } from "../../../shared/contexts/linksContext"

export const useHandleLinkNovo = (setLinks: Dispatch<SetStateAction<Link[]>>) => {
    return () => {
        const novoLink = {
            nome: "",
            rede: "",
            descricao: "",
            url: ""
        }
            
        setLinks(atual => [...atual, novoLink])
    }
}