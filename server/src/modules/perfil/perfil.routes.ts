import { Router } from "express"
import PerfilModel from "../perfil.model"

import multer from "multer"
import mongoose from "mongoose"
import { GridFSBucket } from "mongodb"
import { Readable } from "node:stream"
import { pipeline } from "node:stream/promises"


import {
    buscarPerfil,
    criarPerfil,
    editarPerfil 
} from "../perfil.controller"

const perfilRoutes = Router()

perfilRoutes.get("/", buscarPerfil)
perfilRoutes.post("/", criarPerfil)
perfilRoutes.put("/", editarPerfil)

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }
})


perfilRoutes.get("/", async (_req, res) => {
    const perfil = await PerfilModel.findOne()

    if (!perfil) {
        return res.status(404).json({
            mensagem: "Perfil não existe"
        })
    }

    return res.json(perfil)
})

perfilRoutes.post("/foto", upload.single("foto"), async (req,res) => {
    console.log("req", req)

    if (!req.file) {
        return res.status(400).json({ mensagem: "Envie uma imagem no campo foto"})
    }

    if (!req.file.mimetype.startsWith("image/")) {
        return res.status(400).json({ mensagem: "O arquivo precisa ser uma imagem" })
    }

    const perfil = await PerfilModel.findOne()

    if (!perfil) {
        return res.status(404).json({ mensagem: "Perfil não existe" })
    }

    const db = mongoose.connection.db
    if (!db) {
        throw new Error("Banco de dados não conectado.")
    }

    const bucket = new GridFSBucket(db, { bucketName: "fotos" })
    const stream = bucket.openUploadStream(req.file.originalname, {
        metadata: {
            contentType: req.file.mimetype
        }
    })

    await pipeline(Readable.from(req.file.buffer), stream)

    perfil.fotoId = stream.id
    await perfil.save()

    return res.status(201).json({ fotoId: stream.id })
})

perfilRoutes.get("/foto", async (_req, res) => {
    const perfil = await PerfilModel.findOne().select("fotoId")

    if (!perfil?.fotoId) {
        return res.status(404).json({ mensagem: "Foto não encontrada." })
    }

    const db = mongoose.connection.db
    if (!db) {
        throw new Error("Banco de dados não conectado.")
    }

    const bucket = new GridFSBucket(db, { bucketName: "fotos" })
    const arquivo = await bucket.find({ _id: perfil.fotoId }).next()

    if (!arquivo) {
        return res.status(404).json({ mensagem: "Arquivo da foto não encontrado." })
    }

    const contentType = arquivo.metadata?.contentType
    if (typeof contentType !== "string" || !contentType.startsWith("image/")) {
        return res.status(415).json({ mensagem: "Formato de imagem inválido." })
    }

    res.setHeader("Content-Type", contentType)
    res.setHeader("X-Content-Type-Options", "nosniff")

    await pipeline(bucket.openDownloadStream(arquivo._id), res)
})


export default perfilRoutes