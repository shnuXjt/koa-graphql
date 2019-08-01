import * as mongoose from 'mongoose';

const Info = mongoose.model('Info');
const Student = mongoose.model('Student');

export const Resolvers = {
    Query: {
        student: () => {
            return Student.find({})
                   .populate({
                       path: 'info',
                       select: "hobby height weight"
                   }) .exec();
        },
        
        infos: () => {
            return Info.find({}).exec();
        },
        info: (parent: any, args: any, context: any) => {
            console.log(args);
            return Info.findOne({
                _id: args.id
            }).exec()
        },
    }
}