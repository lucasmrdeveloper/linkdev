import { createContext, type Dispatch, type SetStateAction } from "react";

export type Perfil = {
    nome: string
    especialidade: string
    localidade: string
    biografia: string
}

export type FotoPerfil = File | null

type PerfilContextValue = {
    perfil: Perfil,
    setPerfil: Dispatch<SetStateAction<Perfil>>

    perfilAPI: Perfil,
    setPerfilAPI: Dispatch<SetStateAction<Perfil>>

    fotoPerfil: FotoPerfil,
    setFotoPerfil: Dispatch<SetStateAction<FotoPerfil>>
}

export const PerfilContext = createContext<PerfilContextValue | null>(null)


