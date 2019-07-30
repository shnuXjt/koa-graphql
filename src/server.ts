import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyparser from 'koa-bodyparser';
import * as KoaStatic from 'koa-static';

import {database} from './mongodb' // 引入mongodb
import { router } from './router';
import { schema } from './scheme/schema';

const {ApolloServer, gql} = require('apollo-server-koa');
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
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

const server = new ApolloServer({schema:schema});

database();
const app = new Koa();
const PORT = 4000;
const mrouter = new Router();
server.applyMiddleware({ app });

app.use(bodyparser());
app.use(KoaStatic(__dirname + '/public'))

mrouter.use('', router.routes());


app.use(mrouter.routes())
    .use(mrouter.allowedMethods());

app.listen(PORT);
console.log('server running on port ', PORT);