"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.employeesRouter = (0, express_1.Router)();
exports.employeesRouter.get('/', controllers_1.getEmployees);
exports.employeesRouter.get('/employee/', controllers_1.getById);
exports.employeesRouter.post('/add', controllers_1.create);
exports.employeesRouter.post('/addMany', controllers_1.createMany);
exports.employeesRouter.patch('/edit/:id', controllers_1.update);
exports.employeesRouter.delete('/delete/:id', controllers_1.remove);
//# sourceMappingURL=employees.js.map