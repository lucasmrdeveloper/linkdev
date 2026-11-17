import { useLinkContexto } from "../hooks/useLinkContexto"
import { useHandleChange } from "../hooks/useHandleChange"

type Props = {
    indice: number
}

const DescricaoLink = ({indice}: Props) => {
    const { links } = useLinkContexto()
    const handleChange = useHandleChange()

    return (
        <div>
            <label htmlFor="descricao">Descrição</label>
            <textarea 
                name="descricao" 
                id="descricao"
                placeholder="Descrição do link"
                value={links[indice].descricao}
                onChange={(e) => handleChange(e, indice)}>
            </textarea>
        </div>
    )
}

export default DescricaoLink