import type { RefObject } from "react"

export const useHandleBreakpoints = (
    boxRef: RefObject<HTMLDivElement | null>
) => {
    return (campoLargura: string) => {
        const box = boxRef.current
        const tamanhoTela = campoLargura
    
        if (!box) return
        
        box.style.maxWidth = `${tamanhoTela}px`
        box.style.transition = "max-width 300ms"
        
        if (tamanhoTela === "375") box.style.padding = "30px"
    }
}