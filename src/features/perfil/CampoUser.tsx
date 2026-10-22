import { useHandleChange } from "./hook/useHandleChange"
import "../../shared/styles/forms.css"

type CompoUserProps = {
    label: string
    placeholder: string
    campo: "nome" | "especialidade" | "localidade" | "biografia"
    tipo?: "text" | "textarea"
}

const CampoUser = ({ label, placeholder, campo, tipo }: CompoUserProps ) => {
   
    const { perfil, handleChange } = useHandleChange(campo)

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