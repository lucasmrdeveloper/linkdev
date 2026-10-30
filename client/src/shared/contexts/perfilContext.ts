import { createContext, type Dispatch, type SetStateAction } from "react";

export type Perfil = {
    nome: string
    especialidade: string
    localidade: string
    biografia: string
    habilidades: string[]
    projetos: string[]
}

type PerfilContextValue = {
    perfil: Perfil,
    setPerfil: Dispatch<SetStateAction<Perfil>>
}

export const PerfilContext = createContext<PerfilContextValue | null>(null)