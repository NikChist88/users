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
exports.employeesService = void 0;
const repositories_1 = require("../repositories");
exports.employeesService = {
    createEmployee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = Object.assign({}, data);
                return yield repositories_1.employeesRepo.create(employee);
            }
            catch (_a) {
                return null;
            }
        });
    },
    updateEmployee(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield repositories_1.employeesRepo.update(id, data);
                if (employee)
                    return true;
            }
            catch (_a) {
                return false;
            }
        });
    },
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield repositories_1.employeesRepo.delete(id);
                if (employee)
                    return true;
            }
            catch (_a) {
                return false;
            }
        });
    },
};
//# sourceMappingURL=employees-service.js.map