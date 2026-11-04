import { useHandleSalvar } from "../hooks/useHandleSalvar.ts"
import "./SidebarButton.css"


const SidebarButton = () => {
    const { mensagem, salvando, handleSalvar } = useHandleSalvar()

    return (
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
    )
}

export default SidebarButton