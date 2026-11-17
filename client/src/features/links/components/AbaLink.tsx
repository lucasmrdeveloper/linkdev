import { useLinkContexto } from "../hooks/useLinkContexto"

import "./styles/AbaLink.css"

import { iconOptions } from "../utils/icones"

const AbaLink = ({ indice }: { indice: number }) => {
    const { links } = useLinkContexto() 
 
    const IconeSelecionado = iconOptions.find(
        ({id}) => id === links[indice].icone
    )?.Icon

    return(
        <>
            <div className="link-aba">
                {IconeSelecionado ? <IconeSelecionado size={25}/> : "Ícone"}

                <span className="link-aba-titulo">{links[indice].nome}</span>

                <img 
                    className="link-aba-seta" 
                    src="/seta-abrir.svg" 
                    alt="Seta" 
                />
             </div>
        </>
    )
}   

export default AbaLink