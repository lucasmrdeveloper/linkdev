import { iconOptions } from "./icones"

export const obterOpcoesSociais = () => {
    const sociais = ["github", "linkedin", "site"]

    const resultado = sociais.flatMap(social => {
        const icone = iconOptions.find(opcao => opcao.id === social)

        return icone ? [icone] : []
    })

    return resultado     
}