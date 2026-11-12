import type { RefObject } from "react"

export const useHandleBreakpoints = (
    boxRef: RefObject<HTMLDivElement | null>
) => {
    return (campoLargura: string) => {
        const box = boxRef.current
        const tamanhoTela = campoLargura
    
        if (box) {
            box.style.maxWidth = `${tamanhoTela}px`
            box.style.transition = "max-width 300ms"
        }
    }
}