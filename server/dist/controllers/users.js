"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const data_1 = require("../data/data");
const toolkit_1 = require("@reduxjs/toolkit");
// get users
const getUsers = (req, res) => {
    res.send(data_1.db.users);
};
exports.getUsers = getUsers;
// get user by id
const getUserById = (req, res) => {
    const user = data_1.db.users.find((u) => u.id === req.params.id);
    if (!user)
        return res.sendStatus(404);
    res.status(200).json(user);
};
exports.getUserById = getUserById;
// create user
const createUser = (req, res) => {
    const user = {
        id: (0, toolkit_1.nanoid)().slice(0, 6),
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        company: req.body.company,
        country: req.body.country,
    };
    data_1.db.users.push(user);
    res.status(201).json({ message: 'User created!' });
};
exports.createUser = createUser;
// delete user
const deleteUser = (req, res) => {
    const user = data_1.db.users.find((u) => u.id === req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found!' });
    }
    else {
        data_1.db.users = data_1.db.users.filter((user) => user.id !== req.params.id);
        res.status(200).json({ message: 'User deleted!' });
    }
};
exports.deleteUser = deleteUser;
// update user
const updateUser = (req, res) => {
    const user = data_1.db.users.find((u) => u.id === req.params.id);
    if (!user) {
        res.sendStatus(404);
    }
    else {
        user.name = req.body.name;
        user.email = req.body.email;
        user.role = req.body.role;
        user.company = req.body.company;
        user.country = req.body.country;
        res.status(200).json({ message: 'User data updated!' });
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=users.js.map