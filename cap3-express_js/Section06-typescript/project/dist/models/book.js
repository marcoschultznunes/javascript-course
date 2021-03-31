"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    numOfPages: {
        type: Number,
        required: true,
        min: [1, 'Book must have at least a page.']
    },
    __v: { type: Number, select: false },
});
exports.default = mongoose_1.model('Books', BookSchema);
