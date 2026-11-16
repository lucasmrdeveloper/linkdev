import { model, Schema } from "mongoose"

type Perfil = {
    nome: string,
    especialidade: string,
    localidade: string,
    biografia: string,
    fotoURL?: string
    fotoPublic?: string
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
    },
    fotoURL: {
        type: String,
        trim: true
    },
    fotoPublic: {
        type: String,
        trim: true
    }
})

const PerfilModel = model<Perfil>("Perfil", perfilSchema)

export default PerfilModel