import { createContext, type Dispatch, type SetStateAction } from "react";

type habilidadesRascunhoValue = {
    habilidadesRascunho: string[],
    setHabilidadesRascunho: Dispatch<SetStateAction<string[]>>
}

export const HabilidadesRascunhoContext = createContext<habilidadesRascunhoValue | null>(null)