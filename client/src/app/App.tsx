import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilContext, type Perfil } from "../shared/contexts/perfilContext"
import { HabilidadesContext, type Habilidade } from "../shared/contexts/habilidadesContext"
import { HabilidadesNovasContext } from "../shared/contexts/habilidadesNovas"

import PreviewArea from "../features/preview/PreviewArea"

import "./styles/global.css"

function App() {
  
  const [ perfil, setPerfil ] = useState<Perfil>({
    nome: "",
    especialidade: "",
    localidade: "",
    biografia: ""
  })

  const [ habilidadesRascunho, setHabilidadesRascunho ] = useState<Habilidade[]>([])
  const [ habilidadesNovas, setHabilidadesNovas ] = useState<Habilidade[]>([])
  const [ habilidadesExcluidas, setHabilidadesExcluidas ] = useState<string[]>([])

    
  
  return (
    <main>
        <HabilidadesContext value={{habilidadesRascunho, setHabilidadesRascunho}}>
          <PerfilContext value={{perfil, setPerfil}}>
            <HabilidadesNovasContext value={{habilidadesNovas, setHabilidadesNovas, habilidadesExcluidas, setHabilidadesExcluidas}}>
              <Sidebar />
              <PreviewArea />
            </HabilidadesNovasContext>
          </PerfilContext>
        </HabilidadesContext>
    </main>
  )
}


export default App
