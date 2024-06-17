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
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployeeById = exports.getAllEmployees = void 0;
const repositories_1 = require("../repositories");
const employees_service_1 = require("../services/employees-service");
/**
 * @route GET /employees
 * @desc Get all employees
 * @access Private
 */
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield repositories_1.employeesQueryRepo.findAll();
        employees
            ? res.status(200).json(employees)
            : res.status(404).json({ message: 'Employees not found!' });
    }
    catch (_a) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.getAllEmployees = getAllEmployees;
/**
 * @route GET /employees/employee
 * @desc Get employee by ID
 * @access Private
 */
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield repositories_1.employeesQueryRepo.findById(req.query.id);
        employee
            ? res.status(200).json(employee)
            : res.status(404).json({ message: 'Employees not found!' });
    }
    catch (_b) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.getEmployeeById = getEmployeeById;
/**
 * @route POST /employees/add
 * @desc Create new employee
 * @access Private
 */
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employees_service_1.employeesService.createEmployee(req.body);
        employee
            ? res.status(201).json(employee)
            : res.status(400).json({ message: 'Faild to create employee!' });
    }
    catch (_c) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.createEmployee = createEmployee;
/**
 * @route PATCH /employees/edit/:id
 * @desc Update employee data
 * @access Private
 */
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUpdated = yield employees_service_1.employeesService.updateEmployee(req.params.id, req.body);
        isUpdated
            ? res.status(200).json({ message: 'Employee data updated!' })
            : res.status(404).json({ message: 'Employee not found!' });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.updateEmployee = updateEmployee;
/**
 * @route DELETE /employees/:id
 * @desc Delete employee by ID
 * @access Private
 */
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = yield employees_service_1.employeesService.deleteEmployee(req.params.id);
        isDeleted
            ? res.status(200).json({ message: `Employee deleted!` })
            : res.status(404).json({ message: 'Employee not found!' });
    }
    catch (_d) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.deleteEmployee = deleteEmployee;
//# sourceMappingURL=employees.js.map