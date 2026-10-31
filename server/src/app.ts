import express from "express"
const app = express()

app.use(express.json())

app.get("/api/perfil", (req, res) => {
    res.json({ status: "123"})
})


export default app