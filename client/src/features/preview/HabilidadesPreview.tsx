import { useHabilidadesContexto } from "../habilidades/hooks/useHabilidadesContexto"
import "./styles/HabilidadesPreview.css"

const HabilidadesPreview = () => {
    const { habilidades } = useHabilidadesContexto()

    return (
        <ul className="preview-habilidades">
            {habilidades.map(habilidade => (
                <li className="preview-habilidade">{habilidade.nome}</li>
            ))} 
        </ul>  
    )
}

export default HabilidadesPreview