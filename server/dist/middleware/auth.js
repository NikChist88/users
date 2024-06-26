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
exports.auth = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        const secret = process.env.JWT_SECRET;
        if (!token || !secret) {
            throw new Error('Token or secret key not found!');
        }
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        const user = yield prisma_client_1.prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        });
        if (!user) {
            throw new Error('User not found!');
        }
        req.body.user = user;
        next();
    }
    catch (_b) {
        res.status(401).json({ message: 'Not authorized!' });
    }
});
exports.auth = auth;
//# sourceMappingURL=auth.js.map