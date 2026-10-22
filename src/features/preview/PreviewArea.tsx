import"./PreviewArea.css"

import { PerfilRascunhoContext} from "../../shared/contexts/perfilRascunhoContext"
import { useContext } from "react"

const PreviewArea = () => {
    const contexto = useContext(PerfilRascunhoContext)
    
    if (!contexto) {
        throw new Error("Contexto não existe")
    }

    const { perfil } = contexto
    
    const {
        nome,
        especialidade,
        localidade,
        biografia
    } = perfil ?? {}
  

    return(
    
        <div className="preview-container">

            <div className="preview-box">
                <h1 className="preview-nome">{nome}</h1>

                <h2 className="preview-especialidade">{especialidade}</h2>

                <div className="preview-localizacao">
                    <img src="/mapa.svg" alt="Ícone de Localização" />

                    <p>{localidade}</p>
                </div>

                <p className="preview-biografia">{biografia}</p>
            </div>
        </div>
      
    ) 
}

export default PreviewArea