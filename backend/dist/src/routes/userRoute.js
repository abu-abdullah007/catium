"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userMiddleware_1 = require("../middleware/userMiddleware");
const userRouter = (0, express_1.Router)();
userRouter.post('/signup', userMiddleware_1.checkDataMiddleware, userController_1.createUser);
exports.default = userRouter;
