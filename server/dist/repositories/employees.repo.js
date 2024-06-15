"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeesRepo = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
exports.employeesRepo = {
    findAll() {
        return prisma_client_1.prisma.employees.findMany();
    },
    findById(id) {
        return prisma_client_1.prisma.employees.findFirst({ where: { id } });
    },
    create(data) {
        return prisma_client_1.prisma.employees.create({
            data: Object.assign(Object.assign({}, data), { userId: data.userId }),
        });
    },
    update(id, data) {
        return prisma_client_1.prisma.employees.update({ where: { id }, data: data });
    },
    delete(id) {
        return prisma_client_1.prisma.employees.delete({ where: { id } });
    },
};
//# sourceMappingURL=employees.repo.js.map