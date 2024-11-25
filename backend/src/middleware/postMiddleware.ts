import { NextFunction, Request, Response } from "express";
import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}@${file.originalname}`)
    }
})

export function uploadFile(request: Request, response: Response, next: NextFunction) {
    const userId = request.body.userId

    multer({ storage }).single('file')(request, response, (err) => {
        if (!err) {
            request.body.userId = userId;
            next()
        } else {
            response.status(400).json({
                message: "File Upload Faild",
                status: 400,
                success: false,
                err
            })
        }
    })
}