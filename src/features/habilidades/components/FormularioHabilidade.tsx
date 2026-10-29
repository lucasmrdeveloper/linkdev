import { useState, type SubmitEvent } from "react"

import "./styles/FormularioHabilidade.css"


const FormularioHabilidade = () => {
    const [ habilidade, setHabilidade ] = useState("")

   

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {      
        console.log(habilidadesRascunho)

        e.preventDefault()

        setHabilidadesRascunho(atual => [
            ...atual,
            { id: crypto.randomUUID(), nome: habilidade }
        ])
        
        setHabilidadesNovas(atual => [
            ...atual,
            { id: crypto.randomUUID(), nome: habilidade }
        ])
        
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