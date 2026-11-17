import { useState } from "react"
import { useHandleChangeFoto } from "../hooks/useHandleChangeFoto"

import "./FotoPerfil.css"

const FotoPerfil = () => {
    const [preview, setPreview] = useState("/user.png")
    const handleChange = useHandleChangeFoto(setPreview)

    return (
        <div>
            <label htmlFor="foto">Foto de perfil</label>

            <div className="foto-itens">
                <img className="sidebar-preview-foto" src={preview} alt="Prévia imagem de perfil" />
                
                <input 
                    id="foto" 
                    className="input-foto"
                    type="file"
                    onChange={(e) => handleChange(e)} 
                />
                
                <label 
                    htmlFor="foto"
                    className="foto-adicionar"
                >       
                        <img src="/upload.svg" alt="" />
                        Escolher img
                </label>
            </div>
        </div>
    )
}

export default FotoPerfil