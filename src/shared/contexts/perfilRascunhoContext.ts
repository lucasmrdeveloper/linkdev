import { createContext, type Dispatch, type SetStateAction } from "react";

export type PerfilRascunho = {
    nome: string
    especialidade: string
    localidade: string
    biografia: string
    habilidades: string[]
    projetos: string[]
}

type PerfilRascunhoContextValue = {
    perfilRascunho: PerfilRascunho,
    setPerfil: Dispatch<SetStateAction<PerfilRascunho>>
}

export const PerfilRascunhoContext = createContext<PerfilRascunhoContextValue | null>(null)