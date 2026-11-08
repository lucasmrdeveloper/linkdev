import type { ChangeEvent } from "react"
import { useLinkContexto } from "./useLinkContexto"

export const useHandleChange = () => {
    const { setLinks } = useLinkContexto()
    
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, indice: number) => {
        const { value, name } = e.target
       
        setLinks(atual => 
            atual.map((item, i) => 
                i === indice ? {...item, [name]: value} :item
            )
        )
    }
}