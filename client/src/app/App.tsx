import Sidebar from "../shared/components/Sidebar"

import { useState } from "react"

import { PerfilContext, type Perfil } from "../shared/contexts/perfilContext"
import { HabilidadesContext, type Habilidade } from "../shared/contexts/habilidadesContext"
import { LinksContext, type Link } from "../shared/contexts/linksContext"

import PreviewArea from "../features/preview/PreviewArea"

import "./styles/global.css"

function App() {
  const camposPerfil = {
    nome: "",
    especialidade: "",
    localidade: "",
    biografia: ""
  }


  const [ perfil, setPerfil ] = useState<Perfil>({...camposPerfil})

  const [ perfilAPI, setPerfilAPI ] = useState<Perfil>({...camposPerfil})
    
  const [ habilidadesRascunho, setHabilidadesRascunho ] = useState<Habilidade[]>([])
  const [ habilidadesNovas, setHabilidadesNovas ] = useState<Habilidade[]>([])
  const [ habilidadesExcluidas, setHabilidadesExcluidas ] = useState<string[]>([])

  const [ links, setLinks ] = useState<Link[]>([])
  const [ linksAPI, setLinksAPI ] = useState<Link[]>([])

  
  return (
    <main>
        <HabilidadesContext value={{habilidadesRascunho, setHabilidadesRascunho, habilidadesNovas, setHabilidadesNovas, habilidadesExcluidas, setHabilidadesExcluidas}}>
          <PerfilContext value={{perfil, setPerfil, perfilAPI, setPerfilAPI}}>
              <LinksContext value={{links, setLinks, linksAPI, setLinksAPI}}>
                <Sidebar />
                <PreviewArea />
              </LinksContext> 
          </PerfilContext>
        </HabilidadesContext>
    </main>
  )
}


export default App
