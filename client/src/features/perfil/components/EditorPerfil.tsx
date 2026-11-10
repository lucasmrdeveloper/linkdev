import CampoPerfil from "./CampoPerfil"
import type { CampoPerfilProps } from "../types/CampoPerfilProps"
import FotoPerfil from "./FotoPerfil"

const camposPerfil = [
    {
        label: "Nome",
        placeholder: "Digite seu nome",
        campo: "nome"
    },
    {
        label: "Especialidade",
        placeholder: "Digite sua especialidade",
        campo: "especialidade"
    },
    {
        label: "Localização",
        placeholder: "Cidade, Estado",
        campo: "localidade"
    },
    {
        tipo: "textarea",
        label: "Biografia",
        placeholder: "Fale sobre você...",
        campo: "biografia"
    }
] satisfies CampoPerfilProps[]

const EditorPerfil = () => {
    return (
        <div className="box">
            <FotoPerfil />
            
            {camposPerfil.map(configuracao => (
                <CampoPerfil
                    key={configuracao.campo}
                    {...configuracao}
                />
            ))}
        </div>
    )
}

export default EditorPerfil