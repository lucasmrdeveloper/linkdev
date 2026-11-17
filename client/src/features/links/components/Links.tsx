import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleLinkNovo } from "../hooks/useHandleLinkNovo"

import EditorLink from "./EditorLink"
import AbaLink from "./AbaLink"

import "./styles/Links.css"

const Links = () => {
    const { links, setLinks } = useLinkContexto()
    const handleLinkNovo = useHandleLinkNovo(setLinks)

    return (
        <div className="box">
            <button 
                onClick={handleLinkNovo}
                className="link-adicionar"
            >
                    Adicionar Link
            </button>

            <div className="links">
                {links.map((_, indice) => (
                    <AbaLink
                        indice={indice} 
                    /> 
                ))}  
            </div>
        </div>
    )
}

export default Links