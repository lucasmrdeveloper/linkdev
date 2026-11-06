import Aba from "./Aba.tsx"

import SidebarHeader from "./SidebarHeader.tsx"
import SidebarButton from "./SidebarButton.tsx"

import Perfil from "../../features/perfil/components/Perfil.tsx"
import Habilidades from "../../features/habilidades/components/Habilidades.tsx"
import Links from "../../features/links/components/Links.tsx"

import "./Sidebar.css"
import { useBuscarPerfil } from "../../features/perfil/hooks/useBuscarPerfil.ts"
import { useBuscarHabilidades } from "../../features/habilidades/hooks/useBuscarHabilidades.ts"

const Sidebar = () => {
    useBuscarPerfil()
    useBuscarHabilidades()

    return(
        <aside className="sidebar">
            <SidebarHeader />

            <div className="linhas">
                <div>
                    <Aba titulo="Perfil" icone="/usuario.svg">
                        <Perfil />
                    </Aba>

                     <Aba titulo="Habilidades" icone="/skills.svg">
                        <Habilidades />
                    </Aba>

                     <Aba titulo="Links" icone="/link.svg">
                        <Links />
                    </Aba>
                </div>
            </div>

            <SidebarButton />
        </aside>
    )
} 

export default Sidebar