// CSS
import "./SidebarButton.css"

// Hooks
import { useContext, useState } from "react"


// Context
import { PerfilRascunhoContext } from "../contexts/perfilRascunhoContext"
import { HabilidadesNovasContext } from "../contexts/habilidadesNovas"

import { editarPerfil } from "../../features/perfil/services/perfilServices"
import { criarHabilidade } from "../../features/habilidades/services/habilidadesServices"

const SidebarButton = () => {
    const perfilContexto = useContext(PerfilRascunhoContext)
    const habilidadesContexto = useContext(HabilidadesNovasContext)

    
    if (!perfilContexto || !habilidadesContexto) {
        throw new Error("Contexto não existe")
    }
    
    const { perfil } = perfilContexto
    const { habilidadesNovas, setHabilidadesNovas } = habilidadesContexto
    
    const handleSalvar = async () => {
        
        console.log("=====Botão Salvar=====")
        console.log(habilidadesNovas)
            
        try {

            await editarPerfil(perfil)

            for (const habilidade of habilidadesNovas) {
                await criarHabilidade(habilidade)

                setHabilidadesNovas(atual =>
                    atual.filter(item => item.id !== habilidade.id)
                )
            }
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