import { NextFunction, Request, Response } from "express";
import prisma from "../config/DB_CRUD";
import bcrypt from 'bcryptjs'


// signup data validation check middleware -----------------------------------///

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



// login data check validation middleware -------------------------------------------//

export async function checkIfExistMiddleware(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body

    if (email && password) {
        try {
            const userData = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if (userData) {
                await bcrypt.compare(password, userData.password as string, (err, result) => {
                    if (result) {
                        next()
                    } else {
                        response.status(403).json({
                            message: "Password Not Match !",
                            status: 403,
                            success: false
                        })
                    }
                })
            } else {
                response.status(500).json({
                    message: "User Not Found !",
                    status: 500,
                    success: false
                })
            }
        } catch (error) {
            response.status(500).json({
                message: "Unhandled Middleware Error !",
                status: 500,
                success: false,
                error
            })
        }
    }
}