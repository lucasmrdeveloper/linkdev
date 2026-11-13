import dotenv from "dotenv"
import app from "./app"
dotenv.config()
import connectDB from ".././config/database.ts"
import PerfilModel, {perfilPadrao} from "./modules/perfil/perfil.model.ts"
import HabilidadeModel, {habilidadesPadrao} from "./modules/habilidades/habilidades.model.ts"

const port = process.env.PORT

const initServer = async () => {
    await connectDB()

    await PerfilModel.updateOne(
        {},
        { $setOnInsert: perfilPadrao },
        { upsert: true }
    )

    const quantidadeHabilidades = await HabilidadeModel.countDocuments()

    if (quantidadeHabilidades === 0) {
        await HabilidadeModel.insertMany(habilidadesPadrao)
    }

    app.listen(port, () => {
        console.log(`Backend disponível em http://localhost:${port}`)
    })
}

initServer().catch(error => {
    console.error("Não foi possível iniciar o backend:", error)
    process.exitCode = 1
})