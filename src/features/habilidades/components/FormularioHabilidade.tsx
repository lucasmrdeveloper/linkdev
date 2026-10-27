import { useState } from "react"

import "./FormularioHabilidade.css"

const FormularioHabilidade = () => {
    const [ habilidade, setHabilidade ] = useState("")

    const handleSubmit = (e) => {      
        e.preventDefault()

    
        setHabilidade("")
    }

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