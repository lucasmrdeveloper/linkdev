import { useHabilidadesContexto } from "../hooks/useHabilidadesContexto"
import "./styles/ListaHabilidades.css"

const ListaHabilidade = () => {
    const { habilidadesRascunho } = useHabilidadesContexto()

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