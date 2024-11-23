import { NextFunction, Request, Response } from "express";
import prisma from "../config/DB_CRUD";

export async function checkDataMiddleware(request: Request, response: Response, next: NextFunction) {
    const { firstname, lastname, username, email, password } = request.body

    try {
        if (firstname && lastname && username && email && password) {
            const findUser = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if (findUser) {
                response.status(409).json({
                    message: "User Allready Exist, Enter Different Email",
                    status: 409,
                    success: false
                })
            } else {
                next()
            }
        } else {
            response.status(400).json({
                message: "Bad Request, Input Fields Are Empty !",
                status: 400,
                success: false
            })
        }
    } catch (error) {
        response.status(500).json({
            message: "Unhandled Middleware Error !",
            status: 500,
            success: false
        })
    }
}