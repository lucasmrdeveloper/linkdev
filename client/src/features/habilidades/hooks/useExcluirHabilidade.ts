import { useHabilidadesContexto } from "./useHabilidadesContexto"

export const useExcluirHabilidade = () => {
    const {
        setHabilidadesRascunho, 
        setHabilidadesNovas,
        habilidadesNovas,
        setHabilidadesExcluidas
    } = useHabilidadesContexto()

    return (id: string) => {
        const aindaNaoFoiSalva = habilidadesNovas.some(item => item.id === id) 

        setHabilidadesRascunho(atual => 
            atual.filter((item) => item.id !== id)
        ) 
        
        if (aindaNaoFoiSalva) {
            setHabilidadesNovas(atual => 
                atual.filter((item) => item.id !== id)
            )
        }
        else {
            setHabilidadesExcluidas(atual => 
                atual.includes(id) ? atual : [...atual, id]
            )
        } 
    }
}

