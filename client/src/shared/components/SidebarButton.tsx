// CSS
import "./SidebarButton.css"

// Contexts
import usePerfilContexto from "../../features/perfil/hook/usePerfilContexto"

// Services
import { editarPerfil } from "../../features/perfil/services/perfilServices"
import { criarHabilidade, excluirHabilidade } from "../../features/habilidades/services/habilidadesServices" 

const SidebarButton = () => {
    const { perfil } = usePerfilContexto()

    const handleSalvar = async () => {      
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
        }
        catch (error) {
            throw new Error("Houve um erro ao salvar")
        }
    }

    return (
        <div className="sidebar-button">
            <button onClick={handleSalvar}>Salvar</button>
        </div>
    )
}

export default SidebarButton