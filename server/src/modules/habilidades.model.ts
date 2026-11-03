import { model, Schema } from "mongoose"

type Habilidade = {
    id: number,
    nome: string
}

const habilidadesPadrao: Habilidade[] = [
    { id: 1, nome: "JavaScript" },
    { id: 2, nome: "TypeScript" },
    { id: 3, nome: "React" },
    { id: 4, nome: "Node.js" },
    { id: 5, nome: "HTML" },
    { id: 6, nome: "CSS" },
    { id: 7, nome: "Git" },
    { id: 8, nome: "APIs REST" }
]

const habilidadeSchema = new Schema<Habilidade>({
    id : {
        type: Number,
        trim: true
    },
    nome: {
        type: String,
        trim: true
    } 
})

const HabilidadeModel = model<Habilidade>("Habilidade", habilidadeSchema) 

export default HabilidadeModel