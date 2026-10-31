import express from "express"
import perfilRoutes from "./modules/perfil.routes"

const app = express()

app.use(express.json())
app.use("/api/perfil", perfilRoutes)


export default app