import { HabilidadesRascunhoContext } from "../../../shared/contexts/habilidadesRascunhoContext"
import { useContext } from "react"
import "./ListaHabilidade.css"

const ListaHabilidade = () => {
    
    const contexto = useContext(HabilidadesRascunhoContext)
    
    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    const { habilidadesRascunho } = contexto

    return(
        <ul className="lista-habilidades">
            {habilidadesRascunho && (habilidadesRascunho.map((habilidade, indice) => (
                <li key={indice} className="lista-habilidade">
                    <span>{habilidade.nome}</span>

                    <img 
                        src="/lixeira.svg" 
                        alt="Ícone de lixeira" 
                    />
                </li>
            )))}
        </ul>
    )
}

export default ListaHabilidade