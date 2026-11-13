import { HabilidadesContext } from "../../../shared/contexts/habilidadesContext";
import { useContext } from "react";

export const useHabilidadesContexto = () => {
    const contexto = useContext(HabilidadesContext)

    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    return {
        habilidades: contexto.habilidades,
        setHabilidades: contexto.setHabilidades,
        habilidadesNovas: contexto.habilidadesNovas,
        setHabilidadesNovas: contexto.setHabilidadesNovas,
        habilidadesExcluidas: contexto.habilidadesExcluidas,
        setHabilidadesExcluidas: contexto.setHabilidadesExcluidas
    }
}