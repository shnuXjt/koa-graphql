"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config = require("../../config");
require("./schema/info");
require("./schema/student");
exports.database = () => {
    mongoose.set('debug', true);
    mongoose.connect(config.dbPath);
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.dbPath);
    });
    mongoose.connection.on('error', err => {
        console.error(err);
    });
    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ', config.dbPath);
    });
};
//# sourceMappingURL=index.js.map