import usePerfilContexto from "../perfil/hooks/usePerfilContexto"
import { useHabilidadesContexto } from "../habilidades/hooks/useHabilidadesContexto"
import { useBuscarPerfil } from "../perfil/hooks/useBuscarPerfil"

import { useLinkContexto } from "../links/hooks/useLinkContexto"
import { iconOptions } from "../links/utils/icones"

import"./PreviewArea.css"

const PreviewArea = () => {
    const { perfil } = usePerfilContexto()
    const { habilidadesRascunho } = useHabilidadesContexto()
    const { links } = useLinkContexto()
    const { carregamentoPerfil, erro } = useBuscarPerfil()

    const {
        nome,
        especialidade,
        localidade,
        biografia
    } = perfil ?? {}

    return(  
        <div className="preview-container">
            <div className="preview-box">
                {erro ? (
                    <p>{erro}</p>
                ) : carregamentoPerfil ? (
                    <p>Carregando...</p>
                ) : (
                    <>
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
                    </>
                )}


                <div className="preview-links">
                    {links && (links.map(p => {

                        const option = iconOptions.find(({id}) => id === p.icone )
                        const Icon = option?.Icon

                        return(
                            <div className="preview-link">
                                <div className="preview-link-itens">
                                    {Icon && <Icon size={80} color="#fff"/>}

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
    ) 
}

export default PreviewArea