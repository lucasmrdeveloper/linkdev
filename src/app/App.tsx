import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilRascunhoContext, type Perfil } from "../shared/contexts/perfilRascunhoContext"

import "./styles/global.css"

function App() {
  
  const [ perfil, setPerfil ] = useState<Perfil>({
    nome: "",
    especialidade: "",
    localidade: "",
    biografia: ""
  })
  
  return (
    <main>
        <PerfilRascunhoContext value={{perfil, setPerfil}}>
          <Sidebar />
        </PerfilRascunhoContext>
    </main>
  )
}


export default App
