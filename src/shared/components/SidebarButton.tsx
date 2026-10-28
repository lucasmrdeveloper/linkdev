// CSS
import "./SidebarButton.css"

// Hooks
import { useContext, useState } from "react"


// Context
import { PerfilRascunhoContext } from "../contexts/perfilRascunhoContext"
import { HabilidadesRascunhoContext } from "../contexts/habilidadesRascunhoContext"

import { editarPerfil } from "../../features/perfil/services/perfilServices"

const SidebarButton = () => {
    const perfilContexto = useContext(PerfilRascunhoContext)
    const habilidadesContexto = useContext(HabilidadesRascunhoContext)

    
    if (!perfilContexto || !habilidadesContexto) {
        throw new Error("Contexto não existe")
    }
    
    const { perfil } = perfilContexto
    const { habilidadesRascunho } = habilidadesContexto
    
    const handleSalvar = async () => {
        try {
            await editarPerfil(perfil)
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