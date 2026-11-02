import usePerfilContexto from "../perfil/hooks/usePerfilContexto"
import { useHabilidadesContexto } from "../habilidades/hooks/useHabilidadesContexto"
import { useBuscarPerfil } from "../perfil/hooks/useBuscarPerfil"
import"./PreviewArea.css"

const PreviewArea = () => {
    const { perfil } = usePerfilContexto()
    const { habilidadesRascunho } = useHabilidadesContexto()
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
            </div>
        </div>
    ) 
}

export default PreviewArea