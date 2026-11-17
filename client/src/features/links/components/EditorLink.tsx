import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleChange } from "../hooks/useHandleChange"
import { useHandleExcluir } from "../hooks/useHandleExcluir"

import UrlLink from "./UrlLink"
import TituloEIconeLink from "./TituloEIconeLink"
import DescricaoLink from "./DescricaoLink"

import "./styles/EditorLink.css"

const EditorLink = ({ indice }: { indice: number }) => {
    const { links } = useLinkContexto()

    const handleChange = useHandleChange()
    const handleExcluir = useHandleExcluir() 
 
    return(
        <div className="link">
            <UrlLink indice={indice}/>
            <TituloEIconeLink indice={indice}/>
            <DescricaoLink indice={indice} />

            <img className="link-excluir" src="/lixeira.svg" alt="" onClick={() => handleExcluir(indice)}/>
        </div>
    )
}   

export default EditorLink