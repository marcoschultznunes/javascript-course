"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectToDb = (user, password, db) => {
    mongoose_1.connect(`mongodb+srv://${user}:${password}@cluster0.p4xhv.mongodb.net/${db}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(() => {
        console.log('Connected to database!');
        return true;
    })
        .catch((e) => {
        console.log('Could not connect to database. ' + e);
        return false;
    });
};
exports.default = connectToDb;
