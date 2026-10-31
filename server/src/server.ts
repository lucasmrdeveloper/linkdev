import dotenv from "dotenv"
import app from "./app"
dotenv.config()
import connectDB from ".././config/database.ts"


const port = process.env.PORT

const initServer = async () => {
    await connectDB()

    app.listen(port, () => {
         console.log(`Backend disponível em http://localhost:${port}`)
    })
}

initServer().catch(error => {
    console.error("Não foi possível iniciar o backend:", error)
    process.exitCode = 1
})