"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos")); // Route connected
const body_parser_1 = require("body-parser");
const PORT = 6000;
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use("/todos", todos_1.default); // This means all route path preceed this path
// Below route is trigerred when any error is is thrown
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT, () => `server is running on port ${PORT}`);
