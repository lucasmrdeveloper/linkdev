import type { CampoPerfilProps } from "../types/CampoPerfilProps"
import { useHandleChange } from "../hooks/useHandleChange"
import "../../../shared/styles/forms.css"

const CampoPerfil = ({ label, placeholder, campo, tipo }: CampoPerfilProps ) => {
    const { perfil, handleChange } = useHandleChange(campo)
    const valor = perfil[campo]

    return(
        <div className="campo"> 
            <label htmlFor={campo}>{label}</label>

            {tipo === "textarea" ? (
                <textarea
                    id={campo}
                    value={valor}
                    placeholder={placeholder}
                    onChange={handleChange}
                    required
                />
            ) : (
                <input 
                    id={campo}
                    type="text"
                    value={valor}
                    placeholder={placeholder}
                    onChange={handleChange}
                    required
                />
            )}  
        </div>
    )
}   

export default CampoPerfil