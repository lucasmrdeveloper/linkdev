export type CampoPerfilProps = {
    label: string
    placeholder: string
    campo: "nome" | "especialidade" | "localidade" | "biografia"
    tipo?: "text" | "textarea"
}