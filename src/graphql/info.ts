import * as mongoose from 'mongoose';
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

const Info = mongoose.model('Info');

const objType = new GraphQLObjectType({
    name: 'mete',
    fields: {
        createdAt: {
            type: GraphQLString
        },
        updatedAt: {
            type: GraphQLString
        }
    }
})

export let InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: {
        _id: {
            type: GraphQLID
        },
        height: {
            type: GraphQLString
        },
        weight: {
            type: GraphQLString
        },
        hobby: {
            type: new GraphQLList(GraphQLString)
        },
        meta: {
            type: objType
        }
    }
})

export const infos = {
    type: new GraphQLList(InfoType),
    arg: {},
    resolve(/* root, params, options */) {
        return Info.find({}).exec();
    }
}

export const info = {
    type: InfoType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root: any, params: any, options: any) {
        console.log('params: ', params)
        return Info.findOne({
            _id: params.id
        }).exec()
    }
}