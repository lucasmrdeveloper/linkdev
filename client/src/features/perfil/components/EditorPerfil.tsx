import CampoUser from "./CampoUser"
import { type CampoUserProps } from "../types/CampoUserProps"

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
] satisfies CampoUserProps[]

const EditorPerfil = () => {
    return (
        <div className="box">
            {camposPerfil.map((campo) => (
                <CampoUser
                    key={campo.campo}
                    {...campo}
                />
            ))}
        </div>
    )
}

export default EditorPerfil