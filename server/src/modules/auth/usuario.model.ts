import { model, Schema } from "mongoose"

type Usuario = {
    email: string
    senhaHash: string
}

const usuarioSchema = new Schema<Usuario>(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        senhaHash: {
            type: String,
            required: true,
            select: false
        }
    },
    { timestamps: true }
)

const UsuarioModel = model<Usuario>("Usuario", usuarioSchema)

export default UsuarioModel
