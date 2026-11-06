import { obterOpcoesSociais } from "../utils/obterOpcoesSociais"
import "./styles/Links.css"

const LinksOpcoes = () => {
    const icones = obterOpcoesSociais()

    return (
        <div className="box">
            <h2>Adicionar novo link:</h2>
                    
            <div className="links-opcoes">
                {icones.map(({id, Icon}) => {
                    const Icone = Icon

                    return (
                        <div className="link-card">
                            <Icone />
                            <p>{id}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LinksOpcoes