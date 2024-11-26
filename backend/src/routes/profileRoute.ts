import { Router } from "express";
import { checkTokenValidity } from "../middleware/userMiddleware";
import { uploadFile } from "../middleware/postMiddleware";
import { checkProfileValidity } from "../controllers/profileController";
const profileRouter = Router();

profileRouter.post('/create',checkTokenValidity,uploadFile,checkProfileValidity)


export default profileRouter;