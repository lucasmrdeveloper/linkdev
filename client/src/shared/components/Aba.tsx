import { useState, type ReactNode } from "react"

import "./styles/Aba.css"

type AbaProps = {
    titulo: string
    icone: string
    children?: ReactNode
}

const Aba = ({ titulo, icone, children }: AbaProps) => {
    const [aberto, setAberto] = useState(false) 

    return (
        <>
            <div className="aba" onClick={() => setAberto(!aberto)}>
                <div className="aba-cabecalho">
                    <img src={icone} className="aba-cabecalho-icone" alt="Ícone de perfil" />
                    <h2 className="aba-cabecalho-titulo">{titulo}</h2>
                </div>

                <img src="/seta-abrir.svg" alt="Seta" />
            </div>

            {aberto && children}
        </>
    )
}

export default Aba