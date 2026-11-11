import { editarPerfil, criarFoto } from "../../features/perfil/services/perfilServices"
import { type Perfil, type FotoPerfil } from "../contexts/perfilContext"

export const salvarPerfil = async (
    perfil: Perfil, 
    perfilAPI: Perfil,
    fotoPerfil: FotoPerfil
) => {
    const perfilFoiAlterado = 
        perfil.nome !== perfilAPI.nome ||
        perfil.especialidade !== perfilAPI.especialidade ||
        perfil.localidade !== perfilAPI.localidade ||
        perfil.biografia !== perfilAPI.biografia 

    if (perfilFoiAlterado) {
        await editarPerfil(perfil)
    }

    if (fotoPerfil) {
        await criarFoto(fotoPerfil)
    }
}