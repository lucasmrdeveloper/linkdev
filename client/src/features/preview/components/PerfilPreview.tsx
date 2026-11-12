import usePerfilContexto from "../../perfil/hooks/usePerfilContexto"
import "./styles/PerfilPreview.css"

const PerfilPreview = () => {
    const { perfil } = usePerfilContexto()

    const {
        nome,
        especialidade,
        localidade,
        biografia
    } = perfil 

    return (
        <>
            <h1 className="preview-nome">{nome}</h1>

            <h2 className="preview-especialidade">{especialidade}</h2>

            <div className="preview-localizacao">
                <img src="/mapa.svg" alt="Ícone de Localização" />

                <p>{localidade}</p>
            </div>

            <p className="preview-biografia">{biografia}</p>
        </>
    )
}

export default PerfilPreview