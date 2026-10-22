import { useContext, type ChangeEvent } from "react"
import { PerfilRascunhoContext } from "../../shared/contexts/perfilRascunhoContext"

import "../../shared/styles/forms.css"

type CompoUserProps = {
    label: string
    placeholder: string
    campo: "nome" | "especialidade" | "localidade" | "biografia"
    tipo?: "text" | "textarea"
}

const CampoUser = ({ label, placeholder, campo, tipo }: CompoUserProps ) => {
    const contexto = useContext(PerfilRascunhoContext)

    if (!contexto) {
        throw new Error("CampoUser deve estar dentro de PerfilContext.Provider")
    }

    const { perfil, setPerfil } = contexto
    

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target

        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [campo]: value
        })) 
    } 

    return(
        <div className="campo"> 
            <label htmlFor={campo}>{label}</label>

            {tipo === "textarea" ? (
                <textarea
                    id={campo}
                    value={perfil ? perfil[campo] : ""}
                    placeholder={placeholder}
                    onChange={handleChange}
                    required
                />
                ) : (
                <input 
                    id={campo}
                    type="text"
                    value={perfil ? perfil[campo] : ""}
                    placeholder={placeholder}
                    onChange={handleChange}
                    required
                />
            )}  
        </div>
    )
}   

export default CampoUser