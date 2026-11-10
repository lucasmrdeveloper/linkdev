import { createContext, type Dispatch, type SetStateAction } from "react"

export type Link = {
    _id?: string,
    icone: string,
    nome: string
    descricao: string
    url: string
}

type LinksValue = {
    links: Link[],
    setLinks: Dispatch<SetStateAction<Link[]>>

    linksAPI: Link[],
    setLinksAPI: Dispatch<SetStateAction<Link[]>>
}

export const LinksContext = createContext<LinksValue | null>(null)