import { Request, Response } from "express";
import prisma from "../config/DB_CRUD";


export async function checkProfileValidity(request: Request, response: Response) {
    const { id, email } = request.body.userId
    const files = request.files as Express.Multer.File[]

    const filename = files && files.length > 0 ?
        `${request.protocol}://${request.hostname}:${process.env.PORT}/${files[0].path}` : '';
    const idMain = parseInt(id)

    if (id && email) {
        const userFind = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userFind) {
            const findProfile = await prisma.profile.findUnique({
                where: {
                    profileId: userFind.id
                }
            })
            if (findProfile) {
                response.status(401).json({
                    message: "User Profile Allready Exist",
                    status: 401,
                    success: false
                })
            } else {
                try {
                    const newProfle = await prisma.profile.create({
                        data: {
                            profile_image: filename,
                            profile_data: {
                                connect: { id: idMain }
                            }
                        }
                    })

                    response.status(201).json({
                        message: "User profile Created Successfuly",
                        status: 201,
                        success: true,
                        newProfle
                    })
                } catch (error) {
                    response.status(500).json({
                        message: "User Profile Creation Faild",
                        status: 500,
                        success: false,
                        error
                    })
                }
            }
        } else {
            response.status(400).json({
                message: "User Not Exist",
                status: 400,
                success: false
            })
        }
    } else {
        response.status(400).json({
            message: "Bad Request ! User Email And ID Not Found !",
            status: 400,
            success: false
        })
    }
}