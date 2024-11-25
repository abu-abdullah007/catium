import { Request, Response, Router } from "express";
import prisma from "../config/DB_CRUD";
import { createPostController, getAllPosts } from "../controllers/postControllers";
import { uploadFile } from "../middleware/postMiddleware";
import { checkTokenValidity } from "../middleware/userMiddleware";
const postRoutes = Router()


postRoutes.get('/view', getAllPosts)

postRoutes.post('/create', checkTokenValidity, uploadFile, createPostController)

export default postRoutes;