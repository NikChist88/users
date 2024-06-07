"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByName = void 0;
const searchByName = (data, name) => {
    return data.filter((user) => user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
};
exports.searchByName = searchByName;
//# sourceMappingURL=searchByName.js.map