"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const secrets_1 = __importDefault(require("./secrets"));
const connect_1 = __importDefault(require("./connect"));
let app = express_1.default();
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});
app.use((req, res) => {
    res.send('Hello There!');
});
connect_1.default(secrets_1.default.user, secrets_1.default.password, secrets_1.default.db);
exports.default = app;
