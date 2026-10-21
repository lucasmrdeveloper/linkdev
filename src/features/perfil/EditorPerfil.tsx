import CampoUser from "./CampoUser"

const camposPerfil = [
    {
        label: "Nome",
        placeholder: "Digite seu nome",
        campo: "nome"
    },
    {
        label: "Especialidade",
        placeholder: "Desenvolvedor Front-end",
        campo: "especialidade"
    },
    {
        label: "Localização",
        placeholder: "São Paulo, BR",
        campo: "localidade"
    },
    {
        tipo: "textarea",
        label: "Biografia",
        placeholder: "Fale sobre você...",
        campo: "biografia"
    }
]

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