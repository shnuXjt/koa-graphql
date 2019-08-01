import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaStatic from 'koa-static';

import * as bodyParser from 'koa-bodyparser';
import { Config } from '../config';
import { database } from './mongoose';
import router = require('./router');
import { ApolloServer } from 'apollo-server-koa';
import {TypeDefs} from './schema/typeDefs';
import {Resolvers} from './schema/resolvers';

export class Application {
    app = new Koa();
    router = new Router();

    start() {
        database();
        this.app.use(bodyParser());
        this.app.use(KoaStatic(__dirname + '/public'))

        this.app.use(router.routes())
                .use(router.allowedMethods());
        const server = new ApolloServer({typeDefs: TypeDefs, resolvers: Resolvers})
        server.applyMiddleware({app:this.app})
        this.app.listen(Config.PORT);
        console.log('Koa Server up on port: ', Config.PORT);
    }
}