// CSS
import "./SidebarButton.css"

// Hooks
import { useContext, useState } from "react"


// Context
import { PerfilRascunhoContext } from "../contexts/perfilRascunhoContext"

import { editarPerfil } from "../../features/perfil/services/perfilServices"

const SidebarButton = () => {
    const contexto = useContext(PerfilRascunhoContext)

    if (!contexto) {
        throw new Error("PerfilRascunhoContext não está disponível")
    }

    const { perfil } = contexto

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