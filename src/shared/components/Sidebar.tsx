import Aba from "./Aba.tsx"

import SidebarHeader from "./SidebarHeader.tsx"
import SidebarButton from "./SidebarButton.tsx"

import Perfil from "../../features/perfil/components/Perfil.tsx"

import "./Sidebar.css"
import { useBuscarPerfil } from "../../features/perfil/hook/useBuscarPerfil.ts"

const Sidebar = () => {
    useBuscarPerfil()

    return(
        <aside className="sidebar">
            <SidebarHeader />

            <div className="linhas">
                <div>
                    <Aba titulo="Perfil" icone="/usuario.svg">
                        <Perfil />
                    </Aba>
                    
 
                </div>
            </div>

            <SidebarButton />
        </aside>
    )
} 

export default Sidebar