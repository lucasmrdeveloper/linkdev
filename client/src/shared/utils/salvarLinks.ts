import type { Link } from "../contexts/linksContext"
import { atualizarLinks } from "../../features/links/service/linkServices"
import { criarLinks } from "../../features/links/service/linkServices"

export const salvarLinks = async (links: Link[], linksAPI: Link[]) => {
    const linksNovos = links.filter(link => !link._id)

    const linksAlterados = links.filter(link => {
        if (!link._id) return false

        const original = linksAPI.find(item => item._id === link._id)

        if (!original) return false

        return (
            link.icone !== original.icone ||
            link.nome !== original.nome ||
            link.descricao !== original.descricao ||
            link.url !== original.url
        ) 
    })

    for (const link of linksAlterados) {
        if (!link._id) continue

        await atualizarLinks( link._id, {
            icone: link.icone,
            nome: link.nome,
            descricao: link.descricao,
            url: link.url
        })
    }

    for(const link of linksNovos) {
        await criarLinks(link)
    }
}