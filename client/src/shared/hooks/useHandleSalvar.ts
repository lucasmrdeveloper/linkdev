// Hooks
import { useState, useEffect } from "react"
import usePerfilContexto from "../../features/perfil/hooks/usePerfilContexto"

// Services
import { criarHabilidade } from "../../features/habilidades/services/habilidadesServices"

// Utils
import { salvarPerfil } from "../utils/salvarPerfil"

// Contexts
import { useHabilidadesContexto } from "../../features/habilidades/hooks/useHabilidadesContexto"

type Mensagem = {
    tipo: "sucesso" | "erro"
    mensagem: string
}

export const useHandleSalvar = () => {
    const [mensagem, setMensagem] = useState<Mensagem | null>(null)
    const [salvando, setSalvando] = useState(false)

    const { habilidadesNovas, setHabilidadesNovas } = useHabilidadesContexto()

    const { perfil, perfilAPI } = usePerfilContexto()
    

    useEffect(() => {
        if (!mensagem) return

        const timer = setTimeout(() => {
            setMensagem(null)
        }, 8000)

        return () => clearTimeout(timer)
    }, [mensagem])

    const handleSalvar = async () => {
        setSalvando(true)
        setMensagem(null)

        try {
            await salvarPerfil(perfil, perfilAPI)

            /*   await Promise.all(
                habilidadesExcluidas.map(item => excluirHabilidade(item))
            ) */
      
            for (const habilidade of habilidadesNovas) {
                await criarHabilidade(habilidade)
    
                setHabilidadesNovas(atual =>
                    atual.filter(item => item.id !== habilidade.id)
                )
            } 

            setMensagem({ tipo: "sucesso", mensagem: "Os dados foram salvos." })
        }
        catch {
            setMensagem({ tipo: "erro", mensagem: "Houve um erro." })
        }
        finally {
            setSalvando(false)
        }
    }

    return { mensagem, salvando, handleSalvar }
}