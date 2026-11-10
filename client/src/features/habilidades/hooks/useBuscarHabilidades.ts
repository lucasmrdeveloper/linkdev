import { useEffect } from "react"
import { useHabilidadesContexto } from "./useHabilidadesContexto"
import { buscarHabilidades } from "../services/habilidadesServices"


export const useBuscarHabilidades = () => {
    const { setHabilidades } = useHabilidadesContexto()
    
    useEffect(() => {
        const carregarHabilidades = async () => {
            try{
                const dados = await buscarHabilidades()

                setHabilidades(
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
