import Aba from "./Aba.tsx"

import SidebarHeader from "./SidebarHeader.tsx"

import "./Sidebar.css"

const Sidebar = () => {
    return(
        <aside className="sidebar">
            <SidebarHeader />

            <div className="linhas">
                <div>
                    <Aba titulo="Perfil" icone="/usuario.svg">
                        <div>Conteudo</div>
                    </Aba>
                    
 
                </div>
            </div>

        </aside>
    )
} 

export default Sidebar