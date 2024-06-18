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
exports.remove = exports.update = exports.createMany = exports.create = exports.getEmployeesCount = exports.getById = exports.getEmployees = void 0;
const repositories_1 = require("../repositories");
const employees_service_1 = require("../services/employees-service");
/**
 * @route GET /employees/limit?
 * @desc Get employees by page size
 * @access Private
 */
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield repositories_1.employeesQueryRepo.findEmployees(+req.query.pageSize, +req.query.pageNumber, req.query.userId);
        employees
            ? res.status(200).json(employees)
            : res.status(404).json({ message: 'Employees not found!' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.getEmployees = getEmployees;
/**
 * @route GET /employees/employee?
 * @desc Get employee by ID
 * @access Private
 */
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield repositories_1.employeesQueryRepo.findById(req.query.id);
        employee
            ? res.status(200).json(employee)
            : res.status(404).json({ message: 'Employees not found!' });
    }
    catch (_a) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.getById = getById;
/**
 * @route GET /employees/count
 * @desc Get employees count by user ID
 * @access Private
 */
const getEmployeesCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield repositories_1.employeesQueryRepo.countEmployees(req.query.userId);
        count
            ? res.status(200).json(count)
            : res.status(404).json({ message: 'Employees not found!' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.getEmployeesCount = getEmployeesCount;
/**
 * @route POST /employees/add
 * @desc Create new employee
 * @access Private
 */
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield employees_service_1.employeesService.createEmployee(req.body);
        employee
            ? res.status(201).json(employee)
            : res.status(400).json({ message: 'Faild to create employee!' });
    }
    catch (_b) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.create = create;
/**
 * @route POST /employees/addMany
 * @desc Create new employee
 * @access Private
 */
const createMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield employees_service_1.employeesService.createEmployees(req.body);
        employees !== null
            ? res.status(201).json(employees)
            : res.status(400).json({ message: 'Faild to create employees!' });
    }
    catch (_c) {
        res.status(500).json({ message: 'Internal Server Error!' });
    }
});
exports.createMany = createMany;
/**
 * @route PATCH /employees/edit/:id
 * @desc Update employee data
 * @access Private
 */
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.update = update;
/**
 * @route REMOVE /employees/delete/:id
 * @desc Delete employee by ID
 * @access Private
 */
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.remove = remove;
//# sourceMappingURL=employees.js.map