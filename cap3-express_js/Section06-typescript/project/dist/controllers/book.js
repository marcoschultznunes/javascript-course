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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.deleteById = exports.getById = exports.list = exports.post = void 0;
const book_1 = __importDefault(require("../models/book"));
const check_1 = require("../errors/check");
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, numOfPages } = req.body;
        const bookDTO = { title, numOfPages };
        const newBook = yield book_1.default.create(bookDTO);
        return res.status(201).json({
            message: 'Book created!',
            book: newBook
        });
    }
    catch (err) {
        next(err);
    }
});
exports.post = post;
const list = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookList = yield book_1.default.find();
        return res.status(200).json({
            message: 'Fetched books!',
            books: bookList
        });
    }
    catch (err) {
        next(err);
    }
});
exports.list = list;
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_1.default.findById(id);
        check_1.check404(book, 'Book');
        return res.status(200).json({
            message: 'Book fetched!',
            book
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getById = getById;
const deleteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield book_1.default.findByIdAndDelete(id);
        check_1.check404(book, 'Book');
        return res.status(200).json({
            message: 'Book deleted!'
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteById = deleteById;
const put = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, numOfPages } = req.body;
        const bookDTO = { title, numOfPages };
        const book = yield book_1.default.findByIdAndUpdate(id, bookDTO, { new: true });
        check_1.check404(book, 'Book');
        return res.status(200).json({
            message: 'Book updated!',
            book
        });
    }
    catch (err) {
        next(err);
    }
});
exports.put = put;
const patch = () => { };
exports.patch = patch;
