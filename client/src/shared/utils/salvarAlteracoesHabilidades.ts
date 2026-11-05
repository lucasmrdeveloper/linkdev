import type { Dispatch, SetStateAction } from "react"
import type { Habilidade } from "../contexts/habilidadesContext"

export const salvarAlteracoesHabilidades = async (
    habilidadesNovas: Habilidade[], 
    setHabilidadesNovas: Dispatch<SetStateAction<Habilidade[]>>, 
    criarHabilidade: (habilidade: Habilidade) => Promise<unknown>
) => {
    const salvarHabilidadesNovas = async () => {
        if (habilidadesNovas.length > 0) {
            for (const habilidade of habilidadesNovas) {
                await criarHabilidade(habilidade)
        
                setHabilidadesNovas(atual =>
                    atual.filter(item => item.id !== habilidade.id)
                )
            } 
        }
    }
    
    salvarHabilidadesNovas()
}