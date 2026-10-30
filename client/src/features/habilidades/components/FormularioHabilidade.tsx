import { useState } from "react"
import { useAdicionarHabilidade } from "../hooks/useAdicionarHabilidade"
import "./styles/FormularioHabilidade.css"


const FormularioHabilidade = () => {
    const [ habilidade, setHabilidade ] = useState("")
    const handleSubmit = useAdicionarHabilidade(habilidade, setHabilidade)
   
    return(
        <form onSubmit={handleSubmit} className="form-habilidades">
            <input 
                type="text"
                placeholder="Adicione uma habilidade"
                onChange={(e) => setHabilidade(e.target.value)}
                value={habilidade}
                required
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default FormularioHabilidade