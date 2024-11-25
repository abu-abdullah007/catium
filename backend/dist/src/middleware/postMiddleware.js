"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = uploadFile;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}@${file.originalname}`);
    }
});
function uploadFile(request, response, next) {
    const userId = request.body.userId;
    (0, multer_1.default)({ storage }).single('file')(request, response, (err) => {
        if (!err) {
            request.body.userId = userId;
            next();
        }
        else {
            response.status(400).json({
                message: "File Upload Faild",
                status: 400,
                success: false,
                err
            });
        }
    });
}
