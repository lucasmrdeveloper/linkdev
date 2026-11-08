import { createContext, type Dispatch, type SetStateAction } from "react"

export type Link = {
    rede: string
    descricao: string
    url: string
}

type LinksValue = {
    links: Link[],
    setLinks: Dispatch<SetStateAction<Link[]>>
}

export const LinksContext = createContext<LinksValue | null>(null)