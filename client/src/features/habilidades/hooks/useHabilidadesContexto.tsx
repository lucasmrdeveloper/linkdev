import { HabilidadesContext } from "../../../shared/contexts/habilidadesContext";
import { useContext } from "react";

export const useHabilidadesContexto = () => {
    const contexto = useContext(HabilidadesContext)

    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    return {
        habilidadesRascunho: contexto.habilidadesRascunho,
        setHabilidadesRascunho: contexto.setHabilidadesRascunho,
        habilidadesNovas: contexto.habilidadesNovas,
        setHabilidadesNovas: contexto.setHabilidadesNovas,
        habilidadesExcluidas: contexto.habilidadesExcluidas,
        setHabilidadesExcluidas: contexto.setHabilidadesExcluidas
    }
}