import { useHabilidadesContexto } from "./useHabilidadesContexto"
import type { SubmitEvent } from "react"

export const useAdicionarHabilidade = (habilidade:string, setHabilidade:(valor: string) => void) => {

    const { setHabilidades, setHabilidadesNovas } = useHabilidadesContexto()
 
    return (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const novaHabilidade = {
            id: crypto.randomUUID(),
            nome: habilidade
        }
    
        setHabilidades(atual => [...atual, novaHabilidade])
        setHabilidadesNovas(atual => [...atual, novaHabilidade]) 
        setHabilidade("")
    }
}