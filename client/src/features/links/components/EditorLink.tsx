import { useState } from "react"
import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleIcone } from "../hooks/useHandleIcone"
import { useHandleChange } from "../hooks/useHandleChange"
import { useHandleExcluir } from "../hooks/useHandleExcluir"
import { iconOptions } from "../utils/icones"
import "./styles/EditorLink.css"

const EditorLink = ({ indice }: { indice: number }) => {
    const [mostrarIcones, setMostrarIcones] = useState(false)
    const { links } = useLinkContexto()

    const handleIcone = useHandleIcone()
    const handleChange = useHandleChange()
    const handleExcluir = useHandleExcluir() 
   
    const IconeSelecionado = iconOptions.find(
        ({id}) => id === links[indice].icone
    )?.Icon 
 
    return(
        <div className="link">
            <div className="link-coluna">
                <span className="link-coluna-icone" onClick={() => setMostrarIcones(!mostrarIcones)}>
                    {IconeSelecionado ? <IconeSelecionado size={25}/> : "Ícone" }
                </span>

                <input 
                    type="text" 
                    name="nome"
                    className="link-coluna-nome" 
                    id="nome" 
                    placeholder="Nome do link"
                    value={links[indice].nome} 
                    onChange={(e) => handleChange(e, indice)}
                /> 
                
                <img className="link-excluir" src="/lixeira.svg" alt="" onClick={() => handleExcluir(indice)}/> 
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
            
            <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea 
                    name="descricao" 
                    id="descricao"
                    placeholder="Descrição do link"
                    value={links[indice].descricao}
                    onChange={(e) => handleChange(e, indice)}>
                </textarea>
            </div>

            <div>
                <label htmlFor="url">URL do link</label>
                <input
                    id="url"
                    type="url" 
                    name="url"
                    placeholder="Url do link"
                    value={links[indice].url}
                    onChange={(e) => handleChange(e, indice)}
                />
            </div>
        </div>
    )
}   

export default EditorLink