import * as mongoose from 'mongoose';
import * as config from '../../config';

import './schema/info';
import './schema/student';

export const database = () => {
    mongoose.set('debug', true)
    mongoose.connect(config.dbPath)
    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.dbPath)
    })
    mongoose.connection.on('error', err => {
        console.error(err)
    })
    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ', config.dbPath)
    })
}