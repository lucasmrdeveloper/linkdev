import type { CampoPerfilProps } from "../types/CampoPerfilProps"
import { useHandleChangeCampos } from "../hooks/useHandleChangeCampos"
import "../../../shared/styles/forms.css"

const CampoPerfil = ({ label, placeholder, campo, tipo }: CampoPerfilProps ) => {
    const { perfil, handleChangeCampo } = useHandleChangeCampos(campo)
    const valor = perfil[campo]

    return(
        <div className="campo"> 
            <label htmlFor={campo}>{label}</label>

            {tipo === "textarea" ? (
                <textarea
                    id={campo}
                    value={valor}
                    placeholder={placeholder}
                    onChange={handleChangeCampo}
                    required
                />
            ) : (
                <input 
                    id={campo}
                    type="text"
                    value={valor}
                    placeholder={placeholder}
                    onChange={handleChangeCampo}
                    required
                />
            )}  
        </div>
    )
}   

export default CampoPerfil