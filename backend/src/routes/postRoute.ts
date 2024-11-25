import { Router, Request, Response } from "express";
import { getAllPosts, createPostController } from "../controllers/postControllers";
import { checkTokenValidity } from "../middleware/userMiddleware";
import { uploadFile } from "../middleware/postMiddleware";

const postRoutes = Router()

postRoutes.get('/view', getAllPosts)

postRoutes.post('/create', checkTokenValidity, uploadFile, createPostController)

export default postRoutes;