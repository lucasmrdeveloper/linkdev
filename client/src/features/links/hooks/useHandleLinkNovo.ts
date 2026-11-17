import type { Dispatch, SetStateAction } from "react"
import type { Link } from "../../../shared/contexts/linksContext"

export const useHandleLinkNovo = (setLinks: Dispatch<SetStateAction<Link[]>>) => {
    return () => {
        const novoLink = {
            icone: "site",
            nome: "",
            descricao: "",
            url: ""
        }
            
        setLinks(atual => [...atual, novoLink])
    }
}