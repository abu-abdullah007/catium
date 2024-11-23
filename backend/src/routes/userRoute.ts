import { Router } from "express";
import { createUser } from "../controllers/userController";
import { checkDataMiddleware } from "../middleware/userMiddleware";
import { checkIfExistMiddleware } from "../middleware/userMiddleware";
import { makeUserToken } from "../controllers/userController";

const userRouter = Router();

userRouter.post('/signup',checkDataMiddleware,createUser)
userRouter.post('/login',checkIfExistMiddleware,makeUserToken)

export default userRouter;