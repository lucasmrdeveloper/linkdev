import"./PreviewArea.css"

import { PerfilRascunhoContext} from "../../shared/contexts/perfilRascunhoContext"
import { HabilidadesRascunhoContext } from "../../shared/contexts/habilidadesRascunhoContext"

import { useContext } from "react"

const PreviewArea = () => {
    const perfilContexto = useContext(PerfilRascunhoContext)
    const habilidadesContexto = useContext(HabilidadesRascunhoContext)
    
    if (!perfilContexto || !habilidadesContexto) {
        throw new Error("Contexto não existe")
    }

    const { perfil } = perfilContexto
    const { habilidadesRascunho } = habilidadesContexto
    
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

                 <ul className="preview-habilidades">
                    {habilidadesRascunho && (habilidadesRascunho.map(habilidade => (
                        <li className="preview-habilidade">{habilidade.nome}</li>
                    )))} 
                </ul>  

            </div>
        </div>
      
    ) 
}

export default PreviewArea