"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mongoose = require("mongoose");
const info_1 = require("./info");
const Student = mongoose.model("Student");
let StudentType = new graphql_1.GraphQLObjectType({
    name: "Student",
    fields: {
        _id: {
            type: graphql_1.GraphQLID
        },
        name: {
            type: graphql_1.GraphQLString
        },
        sex: {
            type: graphql_1.GraphQLString
        },
        age: {
            type: graphql_1.GraphQLInt
        },
        info: {
            type: info_1.InfoType
        }
    }
});
exports.student = {
    type: new graphql_1.GraphQLList(StudentType),
    args: {},
    resolve( /* root, params, options */) {
        return Student.find({})
            .populate({
            path: "info",
            select: "hobby height weight"
        })
            .exec();
    }
};
//# sourceMappingURL=student.js.map