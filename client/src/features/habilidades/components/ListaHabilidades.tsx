import { useHabilidadesContexto } from "../hooks/useHabilidadesContexto"
import "./styles/ListaHabilidades.css"
import { useExcluirHabilidade } from "../hooks/useExcluirHabilidade"

const ListaHabilidade = () => {
    const { habilidades } = useHabilidadesContexto()
    const handleExcluir = useExcluirHabilidade()

    return(
        <ul className="lista-habilidades">
            {habilidades && (habilidades.map((habilidade, indice) => (
                <li key={indice} className="lista-habilidade">
                    <span>{habilidade.nome}</span>

                    <img 
                        src="/lixeira.svg" 
                        alt="Ícone de lixeira"
                        onClick={() => handleExcluir(habilidade.id)} 
                    />
                </li>
            )))}
        </ul>
    )
}

export default ListaHabilidade