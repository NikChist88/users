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
exports.current = exports.register = exports.login = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email and password is required!' });
        }
        const user = yield prisma_client_1.prisma.user.findFirst({
            where: {
                email,
            },
        });
        const isPasswordCorrect = user && (yield bcrypt_1.default.compare(password, user.password));
        const secret = process.env.JWT_SECRET;
        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        }
        else {
            return res.status(400).json({ message: 'Wrong email or password!' });
        }
    }
    catch (_a) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.login = login;
// register
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'All fields is required!' });
        }
        const registeredUser = yield prisma_client_1.prisma.user.findFirst({
            where: { email },
        });
        if (registeredUser) {
            return res
                .status(400)
                .json({ message: 'A user with this email already exists' });
        }
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const user = yield prisma_client_1.prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });
        const secret = process.env.JWT_SECRET;
        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name,
                token: jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        }
        else {
            return res.status(400).json({ message: 'Failed to create user!' });
        }
    }
    catch (_b) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.register = register;
// current
const current = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(req.body.user);
});
exports.current = current;
//# sourceMappingURL=auth.js.map