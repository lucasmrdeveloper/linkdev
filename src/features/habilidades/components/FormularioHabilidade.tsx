import { useState, type FormEvent } from "react"

import "./FormularioHabilidade.css"

import { HabilidadesRascunhoContext } from "../../../shared/contexts/habilidadesRascunhoContext"
import { useContext } from "react"

const FormularioHabilidade = () => {
    const [ habilidade, setHabilidade ] = useState("")

    const contexto = useContext(HabilidadesRascunhoContext)
    
    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    const { setHabilidadesRascunho } = contexto

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {      
        e.preventDefault()

        setHabilidadesRascunho(atual => [
            ...atual,
            habilidade
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