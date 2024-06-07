"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./routes/users");
exports.app = (0, express_1.default)();
const port = 3003;
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use((0, cors_1.default)());
exports.app.use('/users', users_1.usersRouter);
// listening port
exports.app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
//# sourceMappingURL=app.js.map