"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = getAllPosts;
exports.createPostController = createPostController;
const DB_CRUD_1 = __importDefault(require("../config/DB_CRUD"));
require("dotenv/config");
const PORT = process.env.PORT;
// get all posts -----------------------------------------------------------//
function getAllPosts(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allPosts = yield DB_CRUD_1.default.posts.findMany({
                orderBy: {
                    id: 'desc'
                },
                include: {
                    author: {
                        select: {
                            firstname: true,
                            lastname: true,
                            username: true,
                            email: true
                        }
                    }
                }
            });
            response.status(200).json({
                message: "All Posts Get Successfuly",
                status: 200,
                success: true,
                allPosts
            });
        }
        catch (error) {
            response.status(500).json({
                message: "Posts Geting Faild !",
                status: 500,
                success: false,
                error
            });
        }
    });
}
// create post controller --------------------------------------------------//
function createPostController(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { title, body, heading, userId } = request.body;
        const filename = `${request.protocol}://${request.hostname}:${process.env.PORT}/${(_a = request.file) === null || _a === void 0 ? void 0 : _a.path}`;
        if (title && body && heading && filename && userId) {
            const id = userId.id;
            try {
                const post = yield DB_CRUD_1.default.posts.create({
                    data: {
                        title,
                        body,
                        heading,
                        img_slug: filename,
                        author: {
                            connect: { id }
                        }
                    }
                });
                response.status(201).json({
                    message: "Post Created Successfuly",
                    status: 201,
                    success: true,
                    data: post
                });
            }
            catch (error) {
                response.status(500).json({
                    message: "Post Creation Faild !",
                    status: 500,
                    success: false,
                    error
                });
            }
        }
        else {
            response.status(400).json({
                message: "Bad Request ! Somthing Is Missing !",
                status: 400,
                success: false,
                title,
                body,
                heading,
                userId
            });
        }
    });
}
