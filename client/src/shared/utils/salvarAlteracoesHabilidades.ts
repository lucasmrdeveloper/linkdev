import type { Dispatch, SetStateAction } from "react"
import type { Habilidade } from "../contexts/habilidadesContext"

import { criarHabilidade } from "../../features/habilidades/services/habilidadesServices"
import { excluirHabilidade } from "../../features/habilidades/services/habilidadesServices"


export const salvarAlteracoesHabilidades = async (
    habilidadesNovas: Habilidade[], 
    setHabilidadesNovas: Dispatch<SetStateAction<Habilidade[]>>, 
    
    habilidadesExcluidas: string[],
    setHabilidadesExcluidas: Dispatch<SetStateAction<string[]>>
) => {
    for (const habilidade of habilidadesNovas) {
        await criarHabilidade(habilidade)

        setHabilidadesNovas(atual =>
            atual.filter(item => item.id !== habilidade.id)
        )
    } 

    for (const habilidade of habilidadesExcluidas) {
        await excluirHabilidade(habilidade)

        setHabilidadesExcluidas(atual =>
            atual.filter(item => item !== habilidade)
        )
    }
}