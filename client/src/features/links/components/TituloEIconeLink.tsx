import { useState } from "react"

import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleChange } from "../hooks/useHandleChange"
import { useHandleIcone } from "../hooks/useHandleIcone"

import { iconOptions } from "../utils/icones"

import "./styles/TituloEIconeLink.css"

type Props = {
    indice: number
}

const TituloEIconeLink = ({indice}: Props) => {
    const { links } = useLinkContexto()
    const [mostrarIcones, setMostrarIcones] = useState(false)

    const handleChange = useHandleChange()
    const handleIcone = useHandleIcone()

    const IconeSelecionado = iconOptions.find(
        ({id}) => id === links[indice].icone
    )?.Icon 

    return (
        <>  
            <div className="link-coluna">
                <div>
                    <label htmlFor="titulo">Título</label>
                    <input 
                        type="text" 
                        name="nome"
                        className="link-coluna-nome" 
                        id="titulo" 
                        placeholder="Nome do link"
                        value={links[indice].nome} 
                        onChange={(e) => handleChange(e, indice)}
                    /> 
                </div>
                
                <div>
                    <label htmlFor="">Ícone</label>
                    <span className="link-coluna-icone" onClick={() => setMostrarIcones(!mostrarIcones)}>
                        {IconeSelecionado ? <IconeSelecionado size={25}/> : "Ícone" }
                    </span> 
                </div>
            </div>

            {mostrarIcones && (
                <div className="link-lista">
                    {iconOptions.map(({id, Icon}) => (
                        <div className="link-lista-item">
                            <Icon 
                                size={24}  
                                onClick={() => handleIcone(id, indice)}  
                                className="link-lista-img"
                            />
                        </div>
                    ))}
                </div>
            )} 
        </>
    )
}

export default TituloEIconeLink