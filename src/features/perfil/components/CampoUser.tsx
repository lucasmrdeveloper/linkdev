import { useHandleChange } from "../hook/useHandleChange"
import "../../../shared/styles/forms.css"
import { type CampoUserProps } from "../types/CampoUserProps"

const CampoUser = ({ label, placeholder, campo, tipo }: CampoUserProps ) => {
   
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