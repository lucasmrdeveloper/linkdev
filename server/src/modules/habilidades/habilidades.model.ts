import { model, Schema } from "mongoose"

type Habilidade = {
    nome: string
}

export const habilidadesPadrao: Habilidade[] = [
    { nome: "JavaScript" },
    { nome: "TypeScript" },
    { nome: "React" }
]

const habilidadeSchema = new Schema<Habilidade>({
    nome: {
        type: String,
        trim: true
    } 
})

const HabilidadeModel = model<Habilidade>("Habilidade", habilidadeSchema) 

export default HabilidadeModel