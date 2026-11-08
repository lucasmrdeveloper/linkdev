import { useContext } from "react";
import { LinksContext } from "../../../shared/contexts/linksContext";

export const useLinkContexto = () => {
    const contexto = useContext(LinksContext)

    if (!contexto) {
        throw new Error("Contexto de links não existe.")
    }

    return {...contexto}
}