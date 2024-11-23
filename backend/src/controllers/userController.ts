import { Request, Response } from "express";
import prisma from "../config/DB_CRUD";
import bcrypt from 'bcryptjs'

export async function createUser(request: Request, response: Response) {
    const { firstname, lastname, username, email, password } = request.body
    try {
        const salt = await bcrypt.genSalt(10)

        const hashedPass = await bcrypt.hash(password,salt)

        const newUser = await prisma.user.create({
            data: {
                firstname,
                lastname,
                username,
                email,
                password:hashedPass
            }
        })

        response.status(201).json({
            message: "User Created Successfuly !",
            status: 201,
            success: true
        })
    } catch (error) {
        response.status(500).json({
            message: "User Creation Faild !",
            status: 500,
            success: false,
            error
        })
    }
}