"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.employeesRouter = (0, express_1.Router)();
exports.employeesRouter.get('/', controllers_1.getAllEmployees);
exports.employeesRouter.get('/:id', controllers_1.getEmployeeById);
exports.employeesRouter.post('/add', controllers_1.createEmployee);
exports.employeesRouter.put('/edit/:id', controllers_1.updateEmployee);
exports.employeesRouter.delete('/:id', controllers_1.deleteEmployee);
//# sourceMappingURL=employees.js.map