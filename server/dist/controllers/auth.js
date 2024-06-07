"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = exports.register = exports.login = void 0;
// login
const login = (req, res) => {
    res.send('login');
};
exports.login = login;
// register
const register = (req, res) => {
    res.send('register');
};
exports.register = register;
// current
const current = (req, res) => {
    res.send('current');
};
exports.current = current;
//# sourceMappingURL=auth.js.map