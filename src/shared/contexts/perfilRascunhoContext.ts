import { createContext, type Dispatch, type SetStateAction } from "react";

export type Perfil = {
    nome: string
    especialidade: string
    localidade: string
    biografia: string
}

type PerfilRascunhoContextType = {
    perfil: Perfil,
    setPerfil: Dispatch<SetStateAction<Perfil>>
}

export const PerfilRascunhoContext = createContext<PerfilRascunhoContextType | null>(null)


