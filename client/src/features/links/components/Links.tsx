import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleLinkNovo } from "../hooks/useHandleLinkNovo"
import "./styles/Links.css"

import EditorLink from "./EditorLink"

const Links = () => {
    const { links, setLinks } = useLinkContexto()
    const handleLinkNovo = useHandleLinkNovo(setLinks)

    return (
        <div className="box">
            <button onClick={handleLinkNovo}>Adicionar Link</button>

            <div className="links">
                {links.map((_, indice) => (
                    <EditorLink
                        indice={indice} 
                    /> 
                ))}  
            </div>
        </div>
    )
}

export default Links