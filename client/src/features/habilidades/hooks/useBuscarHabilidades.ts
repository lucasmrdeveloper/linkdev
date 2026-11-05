import { useEffect, useContext } from "react"

import { buscarHabilidades } from "../services/habilidadesServices"
import { HabilidadesContext } from "../../../shared/contexts/habilidadesContext"


export const useBuscarHabilidades = () => {
    const habilidadesContexto = useContext(HabilidadesContext)

    useEffect(() => {
        console.log("===== Habilidads foi montado =====")
    
        if (!habilidadesContexto) {
            throw new Error("contexto não existe")
        }
    
        const { setHabilidadesRascunho } = habilidadesContexto
    
        const carregarHabilidades = async () => {
            try{
                const dados = await buscarHabilidades()

               setHabilidadesRascunho(
                    dados.map(habilidade => ({
                        nome: habilidade.nome,
                        id: habilidade._id
                    }))
                ) 
            }
            catch(error) {
                throw new Error("Houve um erro:", error)
            }
        }
    
        carregarHabilidades()
    }, [])
}
