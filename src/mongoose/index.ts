import * as mongoose from 'mongoose';

import './info';
import './student';
import { Config } from '../../config';

export function database() {
    mongoose.set("debug", true);
    mongoose.connect(Config.dbPath);
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(Config.dbPath);
    });
    mongoose.connection.on('error', (err) => {
        console.error(err);
    });
    mongoose.connection.on('open', async() => {
        console.log('connect to mongodb: ', Config.dbPath);
    })
}