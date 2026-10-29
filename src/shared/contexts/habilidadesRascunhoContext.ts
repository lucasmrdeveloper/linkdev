import { createContext, type Dispatch, type SetStateAction } from "react";

export type Habilidade = {
    id: string,
    nome: string,
}

type habilidadesRascunhoValue = {
    habilidadesRascunho: Habilidade[],
    setHabilidadesRascunho: Dispatch<SetStateAction<Habilidade[]>>
}

export const HabilidadesRascunhoContext = createContext<habilidadesRascunhoValue | null>(null)