// Hooks
import { useState, useEffect } from "react"
import usePerfilContexto from "../../features/perfil/hooks/usePerfilContexto"

// Services
import { editarPerfil } from "../../features/perfil/services/perfilServices"
import { criarHabilidade } from "../../features/habilidades/services/habilidadesServices"

// Contexts
import { useHabilidadesContexto } from "../../features/habilidades/hooks/useHabilidadesContexto"

type Mensagem = {
    tipo: "sucesso" | "erro"
    mensagem: string
}

export const useHandleSalvar = () => {
    const [mensagem, setMensagem] = useState<Mensagem | null>(null)
    const [salvando, setSalvando] = useState(false)

    const { perfil, perfilAPI } = usePerfilContexto()
    const { habilidadesNovas, setHabilidadesNovas } = useHabilidadesContexto()
    
    const perfilFoiAlterado = 
        perfil.nome !== perfilAPI.nome ||
        perfil.especialidade !== perfilAPI.especialidade ||
        perfil.localidade !== perfilAPI.localidade ||
        perfil.biografia !== perfilAPI.biografia 

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
            if (perfilFoiAlterado) {
                console.log("foi alterado, chamando requisição de editar")
                await editarPerfil(perfil)
            }
            
            /*   await Promise.all(
                habilidadesExcluidas.map(item => excluirHabilidade(item))
            ) */
            console.log("depois do if")
            for (const habilidade of habilidadesNovas) {
                console.log("habilidades precisa alterar")
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