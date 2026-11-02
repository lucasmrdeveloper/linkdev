// CSS
import "./SidebarButton.css"

// Contexts
import usePerfilContexto from "../../features/perfil/hooks/usePerfilContexto"

// Hooks
import { useState, useEffect } from "react"

// Services
import { editarPerfil } from "../../features/perfil/services/perfilServices"
import { criarHabilidade, excluirHabilidade } from "../../features/habilidades/services/habilidadesServices" 

// type
type Mensagem = {
    tipo: "sucesso" | "erro"
    mensagem: string
}

const SidebarButton = () => {
    const { perfil } = usePerfilContexto()
    const [mensagem, setMensagem] = useState<Mensagem | null>(null)
    const [salvando, setSalvando] = useState(false)

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
            await editarPerfil(perfil)
            
            /*   await Promise.all(
                habilidadesExcluidas.map(item => excluirHabilidade(item))
            ) */

            /* for (const habilidade of habilidadesNovas) {
                await criarHabilidade(habilidade)

                setHabilidadesNovas(atual =>
                    atual.filter(item => item.id !== habilidade.id)
                )
            } */
            setMensagem({ tipo: "sucesso", mensagem: "Os dados foram salvos." })
        }
        catch {
            setMensagem({ tipo: "erro", mensagem: "Houve um erro." })
        }
        finally {
           setSalvando(false)
        }
    }

    return (
        <>
            <div className="sidebar-button">
                
                {mensagem && (
                    <p className={`mensagem mensagem-${mensagem.tipo}`}>
                        {mensagem.mensagem}
                    </p>
                )}

                <button onClick={handleSalvar} disabled={salvando}>
                    {salvando ? "Salvando..." : "Salvar"}
                </button>
            </div>
        </>
    )
}

export default SidebarButton