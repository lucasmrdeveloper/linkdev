import { model, Schema } from "mongoose"

type Link = {
    rede: string
    descricao: string
    url: string
}

const LinksPadrao: Link[] = [
    {
        rede: "github",
        descricao: "Sobre o projeto",
        url: "#"
    },
    {
        rede: "linkedin",
        descricao: "Sobre o projeto",
        url: "#"
    }
]

const linksSchema = new Schema<Link>({
    rede: {
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