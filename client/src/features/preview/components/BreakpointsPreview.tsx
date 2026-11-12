import { useState } from "react"
import "./styles/BreakPointsPreview.css"

const campos = [
    {
        src: "/desktop.svg",
        alt: "Visualização no desktop",
        largura: "1024"
    },
    {
        src: "/tablet.svg",
        alt: "Visualização no tablet",
        largura: "768"
    },
    {
        src: "/mobile.svg",
        alt: "Visualização no celular",
        largura: "375"
    }
]

type Props = {
    onChangeDevice: (largura: string) => void
}

const BreakpointsPreview = ({onChangeDevice}: Props) => {
    const [ dispositivoSelecionado, setDispositivoSelecionado ] = useState("1024")

    return (
        <div className="preview-breakpoints">
            <div className="preview-breakpoints-icones">
                 {campos.map(campo =>
                    <div
                        key={campo.largura} 
                        className={`preview-breakpoints-icone-fundo ${ 
                            dispositivoSelecionado === campo.largura ? "ativo" : ""
                        }`}
                    >
                        <img 
                            className="preview-breakpoints-icone"
                            src={campo.src} 
                            alt={campo.alt} 
                            onClick={() => {
                                setDispositivoSelecionado(campo.largura)
                                onChangeDevice(campo.largura)
                            }} 
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BreakpointsPreview