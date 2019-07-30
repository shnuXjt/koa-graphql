"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// 引入 type
const info_1 = require("../graphql/info");
const student_1 = require("../graphql/student");
// 建立 schema
exports.schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "Queries",
        fields: {
            infos: info_1.infos,
            info: info_1.info,
            student: student_1.student
        }
    })
});
//# sourceMappingURL=schema.js.map