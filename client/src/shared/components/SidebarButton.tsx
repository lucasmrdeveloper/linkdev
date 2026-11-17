import { useHandleSalvar } from "../hooks/useHandleSalvar.ts"

import "./styles/SidebarButton.css"

const SidebarButton = () => {
    const { mensagem, salvando, handleSalvar } = useHandleSalvar()

    return (
        <div className="sidebar-salvar">
            {mensagem && (
                <p className={`mensagem mensagem-${mensagem.tipo}`}>
                    {mensagem.mensagem}
                </p>
            )}

            <button onClick={handleSalvar} className="sidebar-salvar-btn" disabled={salvando}>
                {salvando ? "Salvando..." : "Salvar"}
            </button>
        </div>
    )
}

export default SidebarButton