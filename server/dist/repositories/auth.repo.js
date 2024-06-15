"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRepo = void 0;
const prisma_client_1 = require("../prisma/prisma-client");
exports.authRepo = {
    login(data) {
        const { email, password } = data;
        const user = prisma_client_1.prisma.user.findFirst({ where: { email } });
    },
};
//# sourceMappingURL=auth.repo.js.map