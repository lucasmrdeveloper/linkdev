import usePerfilContexto from "../perfil/hook/usePerfilContexto"
import { useHabilidadesContexto } from "../habilidades/hooks/useHabilidadesContexto"
import { useBuscarPerfil } from "../perfil/hook/useBuscarPerfil"
import"./PreviewArea.css"

const PreviewArea = () => {
    const { perfil } = usePerfilContexto()
    const { habilidadesRascunho } = useHabilidadesContexto()
    const { carregamentoPerfil } = useBuscarPerfil()

    const {
        nome,
        especialidade,
        localidade,
        biografia
    } = perfil ?? {}

    return(  
        <div className="preview-container">

            <div className="preview-box">
                {carregamentoPerfil ? (
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