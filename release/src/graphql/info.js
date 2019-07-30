"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const graphql_1 = require("graphql");
const Info = mongoose.model('Info');
const objType = new graphql_1.GraphQLObjectType({
    name: 'mete',
    fields: {
        createdAt: {
            type: graphql_1.GraphQLString
        },
        updatedAt: {
            type: graphql_1.GraphQLString
        }
    }
});
exports.InfoType = new graphql_1.GraphQLObjectType({
    name: 'Info',
    fields: {
        _id: {
            type: graphql_1.GraphQLID
        },
        height: {
            type: graphql_1.GraphQLString
        },
        weight: {
            type: graphql_1.GraphQLString
        },
        hobby: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        meta: {
            type: objType
        }
    }
});
exports.infos = {
    type: new graphql_1.GraphQLList(exports.InfoType),
    arg: {},
    resolve( /* root, params, options */) {
        return Info.find({}).exec();
    }
};
exports.info = {
    type: exports.InfoType,
    args: {
        id: {
            name: 'id',
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        }
    },
    resolve(root, params, options) {
        console.log('params: ', params);
        return Info.findOne({
            _id: params.id
        }).exec();
    }
};
//# sourceMappingURL=info.js.map