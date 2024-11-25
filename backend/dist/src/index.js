"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const postRoute_1 = __importDefault(require("./routes/postRoute"));
const profileRoute_1 = __importDefault(require("./routes/profileRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/uploads', express_1.default.static('uploads'));
app.use('/user', userRoute_1.default); // all user releted routes in here
app.use('/posts', postRoute_1.default); // all post create/ read/ delete routes in here
app.use('/profile', profileRoute_1.default); // all user profile routes in here
app.use('*', (request, response) => {
    response.status(404).json({
        message: "Route not found",
        status: 404,
        success: false
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
