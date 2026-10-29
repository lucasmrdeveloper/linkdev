import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Habilidade } from "./habilidadesRascunhoContext";

type habilidadesNovasValue = {
    habilidadesNovas: Habilidade[],
    setHabilidadesNovas: Dispatch<SetStateAction<Habilidade[]>>
}

export const HabilidadesNovasContext = createContext<habilidadesNovasValue | null>(null)