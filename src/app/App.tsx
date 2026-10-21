import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilContext, type Perfil } from "../shared/contexts/perfilContext"

import "./styles/global.css"

function App() {
  

  const [ perfil, setPerfil ] = useState<Perfil>({
    nome: "",
    especialidade: "",
    localidade: "",
    biografia: "",
    habilidades: [],
    projetos: []
  })
  
  return (
    <main>
        <PerfilContext value={{perfil, setPerfil}}>
          <Sidebar />
        </PerfilContext>
    </main>
  )
}


export default App
