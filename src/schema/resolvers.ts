import * as mongoose from 'mongoose';
import { GraphQLNonNull, GraphQLID } from 'graphql';

const Info = mongoose.model('Info');
const Student = mongoose.model('Student');

export const Resolvers = {
    Query: {
        student: () => {
            return Student.find({})
                   .populate({
                       path: 'info',
                       select: "hobby height, weight"
                   }).exec();
        },
        info: {
        resolve: (root: any, params: any, options: any)=> {
            console.log('params: ', params)
            return Info.findOne({
                _id: params.id
            }).exec()
        }},
        infos: () => {
            return Info.find({}).exec();
        }
    }
}