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
exports.checkDataMiddleware = checkDataMiddleware;
const DB_CRUD_1 = __importDefault(require("../config/DB_CRUD"));
function checkDataMiddleware(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstname, lastname, username, email, password } = request.body;
        try {
            if (firstname && lastname && username && email && password) {
                const findUser = yield DB_CRUD_1.default.user.findUnique({
                    where: {
                        email
                    }
                });
                if (findUser) {
                    response.status(409).json({
                        message: "User Allready Exist, Enter Different Email",
                        status: 409,
                        success: false
                    });
                }
                else {
                    next();
                }
            }
            else {
                response.status(400).json({
                    message: "Bad Request, Input Fields Are Empty !",
                    status: 400,
                    success: false
                });
            }
        }
        catch (error) {
            response.status(500).json({
                message: "Unhandled Middleware Error !",
                status: 500,
                success: false
            });
        }
    });
}
