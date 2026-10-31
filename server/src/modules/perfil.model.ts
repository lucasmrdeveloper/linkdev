import { model, Schema } from "mongoose"

// tipar os campos de perfil, qual tipo de dados eles serão permitidos receber
type Perfil = {
    nome: string,
    especialidade: string,
    localidade: string,
    biografia: string
}

const perfilSchema = new Schema<Perfil>({
    nome: { 
        type: String,
        trim: true,
        default: "" 
    },
    especialidade: { 
        type: String, 
        trim: true, 
        default: ""
    },
    localidade: { 
        type: String, 
        trim: true, 
        default: "" 
    },
    biografia: { 
        type: String, 
        trim: true, 
        default: "" 
    }
})

const PerfilModel = model<Perfil>("Perfil", perfilSchema)

export default PerfilModel