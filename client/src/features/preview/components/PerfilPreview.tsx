import { useEffect, useState } from "react"
import usePerfilContexto from "../../perfil/hooks/usePerfilContexto"
import "../styles/PerfilPreview.css"

const PerfilPreview = () => {
    const { perfil, fotoPerfil } = usePerfilContexto()
    const [fotoSelecionadaURL, setFotoSelecionadaURL] = useState<string>()

    const {
        nome,
        especialidade,
        localidade,
        biografia,
        fotoURL
    } = perfil 

    useEffect(() => {
        if (!fotoPerfil) {
            setFotoSelecionadaURL(undefined)
            return
        }

        const url = URL.createObjectURL(fotoPerfil)
        setFotoSelecionadaURL(url)

        return () => URL.revokeObjectURL(url)
    }, [fotoPerfil])

    const fotoExibida = fotoSelecionadaURL ?? fotoURL

    return (
        <>
            {fotoExibida && (
                <img
                    className="preview-foto"
                    src={fotoExibida}
                    alt="Foto de perfil"
                />
            )}

            <h1 className="preview-nome">{nome}</h1>

            <h2 className="preview-especialidade">{especialidade}</h2>

            <div className="preview-localizacao">
                <img src="/mapa.svg" alt="Ícone de Localização" />

                <p>{localidade}</p>
            </div>

            <p className="preview-biografia">{biografia}</p>
        </>
    )
}

export default PerfilPreview