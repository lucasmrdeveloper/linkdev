import { useHandleChange } from "../hooks/useHandleChange"
import { useLinkContexto } from "../hooks/useLinkContexto"

type UrlLinkProps = {
    indice: number
}

const UrlLink = ({ indice }: UrlLinkProps) => {
    const { links } = useLinkContexto()
    const handleChange = useHandleChange()

    return (
        <div>
            <label htmlFor="url">URL</label>
            <input
                id="url"
                type="url" 
                name="url"
                placeholder="Url do link"
                value={links[indice].url}
                onChange={(e) => handleChange(e, indice)}
            />
        </div>
    )
}

export default UrlLink