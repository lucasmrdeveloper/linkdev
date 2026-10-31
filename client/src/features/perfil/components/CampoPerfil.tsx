import type { CampoPerfilProps } from "../types/CampoPerfilProps"
import { useHandleChange } from "../hook/useHandleChange"
import "../../../shared/styles/forms.css"

const CampoPerfil = ({ label, placeholder, campo, tipo }: CampoPerfilProps ) => {
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

export default CampoPerfil