"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check404 = void 0;
const check404 = (document, modelName) => {
    if (!document) {
        const err = new Error(`${modelName} not found!`);
        err.statusCode = 404;
        throw err;
    }
};
exports.check404 = check404;
