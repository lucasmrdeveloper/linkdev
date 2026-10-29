import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilRascunhoContext, type Perfil } from "../shared/contexts/perfilRascunhoContext"
import { HabilidadesRascunhoContext, type Habilidade } from "../shared/contexts/habilidadesRascunhoContext"

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
    
  
  return (
    <main>
        <HabilidadesRascunhoContext value={{habilidadesRascunho, setHabilidadesRascunho}}>
          <PerfilRascunhoContext value={{perfil, setPerfil}}>
            <Sidebar />
            <PreviewArea />
          </PerfilRascunhoContext>
        </HabilidadesRascunhoContext>
    </main>
  )
}


export default App
