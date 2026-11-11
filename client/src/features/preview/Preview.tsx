import { useBuscarPerfil } from "../perfil/hooks/useBuscarPerfil"

import PerfilPreview from "./PerfilPreview"
import HabilidadesPreview from "./HabilidadesPreview"
import LinksPreview from "./LinksPreview"

import"./Preview.css"

const Preview = () => {
    const { carregamentoPerfil, erro } = useBuscarPerfil()

    return(  
        <div className="preview-container">
            <div className="preview-box">
                <div className="preview-conteudo">
                    <PerfilPreview />
                    <HabilidadesPreview />
                    <LinksPreview />
                </div>
            </div>
        </div>
    ) 
}

export default Preview