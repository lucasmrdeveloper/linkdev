import { model, Schema } from "mongoose"

export type Link = {
    icone: string
    nome: string
    descricao: string
    url: string
}

export const LinksPadrao: Link[] = [
    {
        icone: "github",
        nome: "Github",
        descricao: "Sobre o projeto",
        url: "#"
    },
    {
        icone: "linkedin",
        nome: "Linkedin",
        descricao: "Sobre o projeto",
        url: "#"
    }
]

const linksSchema = new Schema<Link>({
    icone: {
        type: String,
        trim: true
    },
    nome: {
        type: String,
        trim: true
    },
    descricao: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
})

const LinksModel = model<Link>("Link", linksSchema)

export default LinksModel