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
exports.createUser = createUser;
exports.makeUserToken = makeUserToken;
const DB_CRUD_1 = __importDefault(require("../config/DB_CRUD"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const JWT_SECRET = process.env.JWT_SECRET;
// user create controller ------------------------------------------------// 
function createUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstname, lastname, username, email, password } = request.body;
        try {
            const salt = yield bcryptjs_1.default.genSalt(10);
            const hashedPass = yield bcryptjs_1.default.hash(password, salt);
            const newUser = yield DB_CRUD_1.default.user.create({
                data: {
                    firstname,
                    lastname,
                    username,
                    email,
                    password: hashedPass
                }
            });
            response.status(201).json({
                message: "User Created Successfuly !",
                status: 201,
                success: true
            });
        }
        catch (error) {
            response.status(500).json({
                message: "User Creation Faild !",
                status: 500,
                success: false,
                error
            });
        }
    });
}
// user validation token assainging controller ---------------------------------------------//
function makeUserToken(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, id } = request.body;
        try {
            if (email && id) {
                const token = jsonwebtoken_1.default.sign({ email, id }, JWT_SECRET, { expiresIn: '1h' });
                response.status(200).json({
                    message: "Login Successfuly !",
                    status: 200,
                    success: true,
                    token
                });
            }
            else {
                response.status(403).json({
                    email, id
                });
            }
        }
        catch (error) {
            response.status(500).json({
                message: "Login Faild !",
                status: 500,
                success: false,
            });
        }
    });
}
