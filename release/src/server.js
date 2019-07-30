"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const KoaStatic = require("koa-static");
const mongodb_1 = require("./mongodb"); // 引入mongodb
const router_1 = require("./router");
const schema_1 = require("./scheme/schema");
const { ApolloServer, gql } = require('apollo-server-koa');
// Construct a schema, using GraphQL schema language
const typeDefs = gql `
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
const server = new ApolloServer({ schema: schema_1.schema });
mongodb_1.database();
const app = new Koa();
const PORT = 4000;
const mrouter = new Router();
server.applyMiddleware({ app });
app.use(bodyparser());
app.use(KoaStatic(__dirname + '/public'));
mrouter.use('', router_1.router.routes());
app.use(mrouter.routes())
    .use(mrouter.allowedMethods());
app.listen(PORT);
console.log('server running on port ', PORT);
//# sourceMappingURL=server.js.map