import { editarPerfil } from "../../features/perfil/services/perfilServices"
import type { Perfil } from "../contexts/perfilContext"

export const salvarPerfil = async (perfil: Perfil, perfilAPI: Perfil) => {
    const perfilFoiAlterado = 
        perfil.nome !== perfilAPI.nome ||
        perfil.especialidade !== perfilAPI.especialidade ||
        perfil.localidade !== perfilAPI.localidade ||
        perfil.biografia !== perfilAPI.biografia 

    if (perfilFoiAlterado) {
        await editarPerfil(perfil)
    }
}