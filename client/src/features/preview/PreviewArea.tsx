import { useBuscarPerfil } from "../perfil/hooks/useBuscarPerfil"

import { useLinkContexto } from "../links/hooks/useLinkContexto"
import { iconOptions } from "../links/utils/icones"

import"./PreviewArea.css"

import PreviewPerfil from "./PreviewPerfil"
import HabilidadesPreview from "./HabilidadesPreview"

const PreviewArea = () => {
    const { links } = useLinkContexto()
    const { carregamentoPerfil, erro } = useBuscarPerfil()

    return(  
        <div className="preview-container">
            <div className="preview-box">
                <div className="preview-conteudo">
                    
                    <PreviewPerfil />
                    <HabilidadesPreview />

                    

                    <div className="preview-links">
                        {links && (links.map(p => {

                            const option = iconOptions.find(({id}) => id === p.icone )
                            const Icon = option?.Icon

                            return(
                                <div className="preview-link">
                                    <div className="preview-link-itens">
                                        {Icon && <Icon size={50} color="#fff"/>}

                                        <div className="preview-link-item">
                                            <h2 className="preview-link-nome">{p.nome}</h2>
                                            <p className="preview-link-descricao">{p.descricao}</p>
                                        </div>
                                    </div>

                                    <img src="/seta-link.svg" alt="" />
                                </div>
                            )
                        }))} 

                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default PreviewArea