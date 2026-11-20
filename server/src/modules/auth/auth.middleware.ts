import type { NextFunction, Request, Response} from "express"
import jwt from "jsonwebtoken"

declare global {
    namespace Express {
        interface Request {
            usuarioId? : string
        }
    }
}

export const exigirAutenticacao = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies?.devlink_token

    if (typeof token !== "string") {
        res.status(401).json({
            mensagem: "Autenticação necessária."
        })

        return 
    }

    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
        throw new Error("JWT_SECRET não foi definida no arquivo .env")
    }

    try {
        const payload = jwt.verify(token, jwtSecret)

        if (typeof payload === "string" || typeof payload.sub !== "string") {
            res.status(401).json({
                mensagem: "Token inválido."
            })

            return 
        }

        req.usuarioId = payload.sub
        next()
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({
                mensagem: "Token inválido ou expirado."
            })

            return
        }

        next(error)
    }
}