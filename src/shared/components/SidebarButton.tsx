// CSS
import "./SidebarButton.css"

// Hooks
import { useContext, useState } from "react"


// Context
import { PerfilRascunhoContext } from "../contexts/perfilRascunhoContext"

import { editarPerfil } from "../../features/perfil/services/perfilServices"

const SidebarButton = () => {
    const perfilContexto = useContext(PerfilRascunhoContext)
    
    if (!perfilContexto) {
        throw new Error("PerfilRascunhoContext não está disponível")
    }
    
    const { perfil } = perfilContexto
    
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