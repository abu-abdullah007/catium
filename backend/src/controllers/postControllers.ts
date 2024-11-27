import { Request, Response } from "express"
import prisma from "../config/DB_CRUD"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const PORT = process.env.PORT


// get all posts -----------------------------------------------------------//

export async function getAllPosts(request: Request, response: Response) {
    try {
        const allPosts = await prisma.posts.findMany({
            orderBy: {
                id: 'desc'
            },
            include: {
                author: {
                    select: {
                        profile_data: {
                            select: {
                                firstname: true,
                                lastname: true,
                                username: true
                            }
                        },
                        active: true,
                        location: true,
                        phone: true,
                        profile_image: true
                    }
                }
            }
        })

        response.status(200).json({
            message: "All Posts Get Successfuly",
            status: 200,
            success: true,
            allPosts
        })
    } catch (error) {
        response.status(500).json({
            message: "Posts Geting Faild !",
            status: 500,
            success: false,
            error
        })
    }
}


// create post controller --------------------------------------------------//

export async function createPostController(request: Request, response: Response) {
    const { title, body, heading, userId, category, tag } = request.body
    const files = request.files as Express.Multer.File[];

    const filename = files && files.length > 0 ?
        `${request.protocol}://${request.hostname}:${process.env.PORT}/${files[0].path}` : 'file_empty';

    if (title && body && heading && userId) {

        try {
            const post = await prisma.posts.create({
                data: {
                    title,
                    body,
                    heading,
                    img_slug: filename,
                    category,
                    tag,
                    author: {
                        connect: {
                            profileId: parseInt(userId)
                        }
                    }
                }
            })

            response.status(201).json({
                message: "Post Created Successfuly",
                status: 201,
                success: true,
                data: post
            })
        } catch (error) {
            response.status(500).json({
                message: "Post Creation Faild !",
                status: 500,
                success: false,
                error
            })
        }
    } else {
        response.status(400).json({
            message: "Bad Request ! Somthing Is Missing !",
            status: 400,
            success: false
        })
    }
}