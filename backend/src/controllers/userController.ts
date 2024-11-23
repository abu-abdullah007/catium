import { Request, Response } from "express";
import prisma from "../config/DB_CRUD";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET


// user create controller ------------------------------------------------// 

export async function createUser(request: Request, response: Response) {
    const { firstname, lastname, username, email, password } = request.body
    try {
        const salt = await bcrypt.genSalt(10)

        const hashedPass = await bcrypt.hash(password, salt)

        const newUser = await prisma.user.create({
            data: {
                firstname,
                lastname,
                username,
                email,
                password: hashedPass
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



// user validation token assainging controller ---------------------------------------------//

export async function makeUserToken(request: Request, response: Response) {
    const { email } = request.body

    try {
        const token = jwt.sign({ email }, JWT_SECRET as string, { expiresIn: '1h' })

        response.status(200).json({
            message:"Login Successfuly !",
            status:200,
            success:true,
            token
        })
    } catch (error) {
        response.status(500).json({
            message:"Login Faild !",
            status:500,
            success:false,
        })
    }
}