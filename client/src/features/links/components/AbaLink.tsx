import { useState } from "react"
import { useLinkContexto } from "../hooks/useLinkContexto"

import EditorLink from "./EditorLink"

import "./styles/AbaLink.css"

import { iconOptions } from "../utils/icones"

const AbaLink = ({ indice }: { indice: number }) => {
    const [aberto, setAberto] = useState(false)

    const { links } = useLinkContexto() 
 
    const IconeSelecionado = iconOptions.find(
        ({id}) => id === links[indice].icone
    )?.Icon

    return(
        <div className="link-aba-box" onClick={() => setAberto(!aberto)}>
            <div className="link-aba">
                {IconeSelecionado ? <IconeSelecionado size={25}/> : "Ícone"}

                <span className="link-aba-titulo">
                    {links[indice].nome ? links[indice].nome : "Novo Link"}
                </span>

                <img 
                    className="link-aba-seta" 
                    src="/seta-abrir.svg" 
                    alt="Seta" 
                />
            </div>

            {aberto && <EditorLink indice={indice}/>}
        </div>
    )
}   

export default AbaLink