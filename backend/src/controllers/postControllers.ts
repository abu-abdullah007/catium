import { Request, Response } from "express"
import prisma from "../config/DB_CRUD"

export async function getAllPosts(request: Request, response: Response) {
    try {
        const allPosts = await prisma.posts.findMany({
            orderBy: {
                id: 'desc'
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