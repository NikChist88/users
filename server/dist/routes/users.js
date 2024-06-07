"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', controllers_1.getUsers);
exports.usersRouter.get('/:id', controllers_1.getUserById);
exports.usersRouter.post('/', controllers_1.createUser);
exports.usersRouter.delete('/:id', controllers_1.deleteUser);
exports.usersRouter.put('/:id', controllers_1.updateUser);
//# sourceMappingURL=users.js.map