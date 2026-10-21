import Aba from "./Aba.tsx"


const Sidebar = () => {
    return(
        <aside className="sidebar">
            

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