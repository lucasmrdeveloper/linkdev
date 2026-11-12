import { useBuscarPerfil } from "../../perfil/hooks/useBuscarPerfil"

import { useHandleBreakpoints } from "../hooks/useHandleBreakpoints"
import BreakpointsPreview from "./BreakpointsPreview"
import PerfilPreview from "./PerfilPreview"
import HabilidadesPreview from "./HabilidadesPreview"
import LinksPreview from "./LinksPreview"

import { useRef, type MouseEvent } from "react"

import "../styles/Preview.css"

const Preview = () => {
    const { carregamentoPerfil, erro } = useBuscarPerfil()

    const boxRef = useRef<HTMLDivElement>(null)
    const handleBreakpoints = useHandleBreakpoints(boxRef)

    return(  
        <div className="preview-container">
            <BreakpointsPreview onChangeDevice={handleBreakpoints}/>

            <div className="preview-box" ref={boxRef}>
                <div className="preview-conteudo">
                    <PerfilPreview />
                    <HabilidadesPreview />
                    <LinksPreview />
                </div>
            </div>
        </div>
    ) 
}

export default Preview