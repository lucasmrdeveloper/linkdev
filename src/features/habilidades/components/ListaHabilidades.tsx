import { useHabilidadesContexto } from "../hooks/useHabilidadesContexto"
import "./styles/ListaHabilidades.css"
import { useExcluirHabilidade } from "../hooks/useExcluirHabilidade"

const ListaHabilidade = () => {
    const { habilidadesRascunho } = useHabilidadesContexto()
    const handleExcluir = useExcluirHabilidade()

    return(
        <ul className="lista-habilidades">
            {habilidadesRascunho && (habilidadesRascunho.map((habilidade, indice) => (
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