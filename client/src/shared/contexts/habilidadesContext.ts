import { createContext, type Dispatch, type SetStateAction } from "react";

export type Habilidade = {
    id: string,
    nome: string,
}

type habilidadesValue = {
    habilidadesRascunho: Habilidade[],
    setHabilidadesRascunho: Dispatch<SetStateAction<Habilidade[]>>

    habilidadesNovas: Habilidade[],
    setHabilidadesNovas: Dispatch<SetStateAction<Habilidade[]>>

    habilidadesExcluidas: string[],
    setHabilidadesExcluidas: Dispatch<SetStateAction<string[]>>
}

export const HabilidadesContext = createContext<habilidadesValue | null>(null)