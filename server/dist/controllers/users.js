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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
// get users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma_client_1.prisma.userData.findMany();
        res.status(200).json(users);
        return users;
    }
    catch (_a) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.getUsers = getUsers;
// get user by id
const getUserById = (req, res) => {
    try {
        const user = prisma_client_1.prisma.userData.findFirst({ where: { id: req.params.id } });
        if (!user) {
            res.status(404).json({ message: 'User not found!' });
        }
        else {
            res.status(200).json(user);
            return user;
        }
    }
    catch (_a) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
};
exports.getUserById = getUserById;
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_client_1.prisma.userData.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                company: req.body.company,
                country: req.body.country,
            },
        });
        res.status(201).json({ message: 'User created!' });
    }
    catch (_b) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.createUser = createUser;
// delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = prisma_client_1.prisma.userData.findFirst({ where: { id: req.params.id } });
        if (!user) {
            res.status(404).json({ message: 'User not found!' });
        }
        else {
            yield prisma_client_1.prisma.userData.delete({ where: { id: req.params.id } });
            res.status(200).json({ message: 'User deleted!' });
        }
    }
    catch (_c) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.deleteUser = deleteUser;
// update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma_client_1.prisma.userData.findFirst({
            where: { id: req.params.id },
        });
        if (user) {
            yield prisma_client_1.prisma.userData.update({
                where: { id: user.id },
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    role: req.body.role,
                    company: req.body.company,
                    country: req.body.country,
                },
            });
            res.status(200).json({ message: 'User data updated!' });
        }
        else {
            res.status(404).json({ message: 'User not found!' });
        }
    }
    catch (_d) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=users.js.map