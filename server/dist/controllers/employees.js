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
exports.updateEmployee = exports.deleteEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
// get all employees
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield prisma_client_1.prisma.employees.findMany();
        res.status(200).json(employees);
        return employees;
    }
    catch (_a) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.getAllEmployees = getAllEmployees;
// get employee by id
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield prisma_client_1.prisma.employees.findFirst({
            where: { id: req.params.id },
        });
        if (!employee) {
            res.status(404).json({ message: 'Employee not found!' });
        }
        else {
            res.status(200).json(employee);
            return employee;
        }
    }
    catch (_b) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.getEmployeeById = getEmployeeById;
// create employee
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = yield prisma_client_1.prisma.user.findFirst({ where: { id: data.userId } });
        if (user) {
            const employee = yield prisma_client_1.prisma.employees.create({
                data: Object.assign(Object.assign({}, data), { userId: user.id }),
            });
            res.status(201).json(employee);
            return employee;
        }
        else {
            res.status(400).json({ message: 'User of employees not found!' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to create employee!' });
    }
});
exports.createEmployee = createEmployee;
// delete employee
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(404).json({ message: 'Employee not found!' });
        }
        else {
            yield prisma_client_1.prisma.employees.delete({ where: { id } });
            res.status(200).json({ message: 'Employee deleted!' });
        }
    }
    catch (_c) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.deleteEmployee = deleteEmployee;
// update employee
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = req.body;
        if (employee) {
            yield prisma_client_1.prisma.employees.update({
                where: { id: employee.id },
                data: employee,
            });
            res.status(200).json({ message: 'Employee data updated!' });
        }
        else {
            res.status(404).json({ message: 'Employee not found!' });
        }
    }
    catch (_d) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
exports.updateEmployee = updateEmployee;
//# sourceMappingURL=employees.js.map