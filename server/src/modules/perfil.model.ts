import { model, Schema } from "mongoose"

// tipar os campos de perfil, qual tipo de dados eles serão permitidos receber
type Perfil = {
    nome: string,
    especialidade: string,
    localidade: string,
    biografia: string
}

export const perfilPadrao: Perfil = {
    nome: "Seu Nome",
    especialidade: "Sua Especialidade",
    biografia: "Fale um pouco mais sobre você, trabalhos e experiência.",
    localidade: "Cidade, Estado"
}

const perfilSchema = new Schema<Perfil>({
    nome: { 
        type: String,
        trim: true
    },
    especialidade: { 
        type: String, 
        trim: true
    },
    localidade: { 
        type: String, 
        trim: true
    },
    biografia: { 
        type: String, 
        trim: true
    }
})

const PerfilModel = model<Perfil>("Perfil", perfilSchema)

export default PerfilModel