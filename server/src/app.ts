import express from "express"
import cors from "cors"
import perfilRoutes from "./modules/perfil.routes"
import habilidadesRoutes from "./modules/habilidades.routes"
import linksRoutes from "./modules/links.routes"

const app = express()

app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json())
app.use("/api/perfil", perfilRoutes)
app.use("/api/habilidades", habilidadesRoutes)
app.use("/api/links", linksRoutes)


export default app