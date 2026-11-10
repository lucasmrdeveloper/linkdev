import { useHabilidadesContexto } from "./useHabilidadesContexto"

export const useExcluirHabilidade = () => {
    const {
        setHabilidades, 
        setHabilidadesNovas,
        habilidadesNovas,
        setHabilidadesExcluidas
    } = useHabilidadesContexto()

    return (id: string) => {
        const aindaNaoFoiSalva = habilidadesNovas.some(item => item.id === id) 

        setHabilidades(atual => 
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

