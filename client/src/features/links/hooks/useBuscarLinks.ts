import { useEffect } from "react"
import { useLinkContexto } from "./useLinkContexto"
import { buscarLinks } from "../service/linkServices"

export const useBuscarLinks = () => {
    const { setLinks, setLinksAPI } = useLinkContexto()

    useEffect(() => {
        const carregarLinks = async () => {
            try {
                const links = await buscarLinks()
                setLinks(links)
                setLinksAPI(links)
            }
            catch (error) {
                throw new Error("Houve um erro:", error)
            }
        }
 
        carregarLinks()
    }, [])
}