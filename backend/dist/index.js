"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const app = (0, express_1.default)();
const port = 3001;
const bodyParser = require("body-parser");
app.use((0, cors_1.default)());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use("/api/v1", userRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
