import { HabilidadesRascunhoContext } from "../../../shared/contexts/habilidadesRascunhoContext";
import { HabilidadesNovasContext } from "../../../shared/contexts/habilidadesNovas";
import { useContext } from "react";

export const useHabilidadesContexto = () => {
    const contexto = useContext(HabilidadesRascunhoContext)
    const HabilidadesNovasContexto = useContext(HabilidadesNovasContext)

    if (!contexto || !HabilidadesNovasContexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    const { habilidadesRascunho, setHabilidadesRascunho } = contexto
    const { setHabilidadesNovas } = HabilidadesNovasContexto
}