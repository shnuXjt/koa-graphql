import { GraphQLSchema, GraphQLObjectType } from "graphql";
// 引入 type
import { info, infos } from "../graphql/info";
import { student } from "../graphql/student";
// 建立 schema
export const schema =  new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Queries",
    fields: {
      infos,
      info,
      student
    }
  })
});
