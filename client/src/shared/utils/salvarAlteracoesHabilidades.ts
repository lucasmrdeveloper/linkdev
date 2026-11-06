import type { Dispatch, SetStateAction } from "react"
import type { Habilidade } from "../contexts/habilidadesContext"

import { excluirHabilidade } from "../../features/habilidades/services/habilidadesServices"

export const salvarAlteracoesHabilidades = async (
    habilidadesNovas: Habilidade[], 
    setHabilidadesNovas: Dispatch<SetStateAction<Habilidade[]>>, 

    criarHabilidade: (habilidade: Habilidade) => Promise<unknown>,

    habilidadesExcluidas: string[],
    setHabilidadesExcluidas: Dispatch<SetStateAction<string[]>>
) => {
    const salvarHabilidadesNovas = async () => {
        for (const habilidade of habilidadesNovas) {
            await criarHabilidade(habilidade)
    
            setHabilidadesNovas(atual =>
                atual.filter(item => item.id !== habilidade.id)
            )
        } 
    }

    const excluirHabilidades = async () => {
        for (const habilidade of habilidadesExcluidas) {
            await excluirHabilidade(habilidade)

            setHabilidadesExcluidas(atual =>
                atual.filter(item => item !== habilidade)
            )
        }
    } 
    
    salvarHabilidadesNovas()
    excluirHabilidades()
}