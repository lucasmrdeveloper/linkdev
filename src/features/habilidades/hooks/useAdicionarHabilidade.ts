import { useHabilidadesContexto } from "./useHabilidadesContexto"
import type { SubmitEvent } from "react"

export const useAdicionarHabilidade = (habilidade:string, setHabilidade:(valor: string) => void) => {

    const { setHabilidadesRascunho, setHabilidadesNovas } = useHabilidadesContexto()
 
    return (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const novaHabilidade = {
            id: crypto.randomUUID(),
            nome: habilidade
        }
    
        setHabilidadesRascunho(atual => [...atual, novaHabilidade])
        setHabilidadesNovas(atual => [...atual, novaHabilidade]) 
        setHabilidade("")
    }
}