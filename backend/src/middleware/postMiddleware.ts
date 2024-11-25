import { NextFunction, Request, Response } from "express";
import multer from 'multer'
import storage from "../utils/multer";


export function uploadFile(request: Request, response: Response, next: NextFunction) {
    const userId = request.body.userId

    multer({ storage }).array('banner')(request, response, (err) => {
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