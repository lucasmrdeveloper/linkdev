import multer from "multer"

const tiposPermitidos = ["image/jpeg", "image/png", "image/webp"]

const uploadFoto = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (_req, file, callback) => {
        if (!tiposPermitidos.includes(file.mimetype)) {
            return callback(new Error("Envie uma imagem JPEG, PNG ou WEBP."))
        }

        callback(null, true)
    }
})

export default uploadFoto