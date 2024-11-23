import { Request, Response, Router } from "express";
import prisma from "../config/DB_CRUD";
import { getAllPosts } from "../controllers/postControllers";
const postRoutes = Router()

postRoutes.get('/view', getAllPosts)

// postRoutes.post('/create')

export default postRoutes;