import { useState } from "react"
import { useHandleChangeFoto } from "../hooks/useHandleChangeFoto"

const FotoPerfil = () => {
    const [preview, setPreview] = useState("/user.png")
    const handleChange = useHandleChangeFoto(setPreview)

    return (
        <div>
            <label htmlFor="foto">Foto</label>
            <input 
                id="foto" 
                type="file"
                onChange={(e) => handleChange(e)} 
            />

            <img src={preview} alt="Prévia imagem de perfil" />
        </div>
    )
}

export default FotoPerfil