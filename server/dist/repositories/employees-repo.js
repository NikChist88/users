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
exports.employeesRepo = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
exports.employeesRepo = {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma_client_1.prisma.employees.create({ data: Object.assign({}, data) });
            return this._mapper(employee);
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma_client_1.prisma.employees.update({ where: { id }, data });
            return this._mapper(employee);
        });
    },
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma_client_1.prisma.employees.delete({ where: { id } });
            return this._mapper(employee);
        });
    },
    _mapper(employee) {
        return {
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            gender: employee.gender,
            dateOfBirth: employee.dateOfBirth,
            email: employee.email,
            phone: employee.phone,
            address: employee.address,
            role: employee.role,
            company: employee.company,
            country: employee.country,
            aboutMe: employee.aboutMe,
            userId: employee.userId,
        };
    },
};
//# sourceMappingURL=employees-repo.js.map