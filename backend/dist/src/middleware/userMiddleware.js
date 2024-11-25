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
exports.checkIfExistMiddleware = checkIfExistMiddleware;
exports.checkTokenValidity = checkTokenValidity;
const DB_CRUD_1 = __importDefault(require("../config/DB_CRUD"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const JWT_SECRET = process.env.JWT_SECRET;
// signup data validation check middleware -----------------------------------///
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
// login data check validation middleware -------------------------------------------//
function checkIfExistMiddleware(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = request.body;
        if (email && password) {
            try {
                const userData = yield DB_CRUD_1.default.user.findUnique({
                    where: {
                        email
                    }
                });
                if (userData) {
                    yield bcryptjs_1.default.compare(password, userData.password, (err, result) => {
                        if (result) {
                            request.body = Object.assign({ id: userData.id }, request.body);
                            next();
                        }
                        else {
                            response.status(403).json({
                                message: "Password Not Match !",
                                status: 403,
                                success: false
                            });
                        }
                    });
                }
                else {
                    response.status(500).json({
                        message: "User Not Found !",
                        status: 500,
                        success: false
                    });
                }
            }
            catch (error) {
                response.status(500).json({
                    message: "Unhandled Middleware Error !",
                    status: 500,
                    success: false,
                    error
                });
            }
        }
        else {
            response.status(400).json({
                message: "Bad Request !",
                status: 400,
                success: false
            });
        }
    });
}
// user bearar token validation check ---------------------------------------------------//
function checkTokenValidity(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = (_a = request.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (token) {
            try {
                const validation = jsonwebtoken_1.default.verify(token, JWT_SECRET);
                request.body = Object.assign({ userId: validation }, request.body);
                next();
            }
            catch (error) {
                response.status(403).json({
                    message: "Token Is Not Valid",
                    status: 403,
                    success: false
                });
            }
        }
        else {
            response.status(500).json({
                message: "Token Not Found !",
                status: 500,
                success: false
            });
        }
    });
}
