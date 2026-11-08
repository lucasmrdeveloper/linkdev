import { useEffect } from "react"
import { useLinkContexto } from "./useLinkContexto"
import { buscarLinks } from "../service/linkServices"

export const useBuscarLinks = () => {
    const { setLinks } = useLinkContexto()

    useEffect(() => {
        const carregarLinks = async () => {
            try {
                const links = await buscarLinks()
                setLinks(links)
            }
            catch (error) {
                throw new Error("Houve um erro:", error)
            }
        }
 
        carregarLinks()
    }, [])
}