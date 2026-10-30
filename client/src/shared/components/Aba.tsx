// Hook
import { useState, type ReactNode } from "react"

// CSS
import "./Aba.css"

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
                <div>
                    <img src={icone} alt="" />
                    <h2>{titulo}</h2>
                </div>

                <img src="/seta-abrir.svg" alt="Seta" />
            </div>

            {aberto && children}
        </>
    )
}

export default Aba