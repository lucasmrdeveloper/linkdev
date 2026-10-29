import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilRascunhoContext, type Perfil } from "../shared/contexts/perfilRascunhoContext"
import { HabilidadesRascunhoContext, type Habilidade } from "../shared/contexts/habilidadesRascunhoContext"
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
    
  
  return (
    <main>
        <HabilidadesRascunhoContext value={{habilidadesRascunho, setHabilidadesRascunho}}>
          <PerfilRascunhoContext value={{perfil, setPerfil}}>
            <HabilidadesNovasContext value={{habilidadesNovas, setHabilidadesNovas}}>
              <Sidebar />
              <PreviewArea />
            </HabilidadesNovasContext>
          </PerfilRascunhoContext>
        </HabilidadesRascunhoContext>
    </main>
  )
}


export default App
