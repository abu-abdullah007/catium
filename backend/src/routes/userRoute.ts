import { Router } from "express";
import { createUser } from "../controllers/userController";
import { checkDataMiddleware } from "../middleware/userMiddleware";

const userRouter = Router();

userRouter.post('/signup',checkDataMiddleware,createUser)

export default userRouter;