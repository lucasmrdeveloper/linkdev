import EditorPerfil from "./EditorPerfil"
import { useBuscarPerfil } from "../hook/useBuscarPerfil"

const Perfil = () => {
    useBuscarPerfil()

    return (
        <EditorPerfil />
    )
    
}

export default Perfil