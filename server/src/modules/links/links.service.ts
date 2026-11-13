import LinksModel from "./links.model"
import { Link } from "./links.model"

export const buscarLinksService = async () => await LinksModel.find()

export const criarLinkService = async (dados: Link) => await LinksModel.create(dados)   

export const editarLinkService = async (id: string, atualizacoes: Partial<Link>) => {
    return await LinksModel.findByIdAndUpdate(
        id,
        { $set: atualizacoes },
        { new: true, runValidators: true }
    )
}

export const excluirLinkService = async (id: string) => 
    await LinksModel.findByIdAndDelete(id)
