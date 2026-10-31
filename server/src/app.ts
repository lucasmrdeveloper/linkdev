import express from "express"
import cors from "cors"
import perfilRoutes from "./modules/perfil.routes"

const app = express()

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())
app.use("/api/perfil", perfilRoutes)


export default app