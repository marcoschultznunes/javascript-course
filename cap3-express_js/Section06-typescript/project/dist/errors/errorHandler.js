"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || 'An error has ocurred.';
    const finalError = {
        message: message
    };
    if (error.errors && status !== 500) {
        finalError.errors = error.errors;
    }
    return res.status(status).json(finalError);
};
exports.default = errorHandler;
