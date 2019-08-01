import * as mongoose from 'mongoose';
import { ObjectID, ObjectId } from 'bson';

const schema = mongoose.Schema;

const StudentSchema: mongoose.Schema  = new schema({
    name: String,
    sex: String,
    age: Number,
    info: {
        type: ObjectId,
        ref: 'Info'
    },
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
});

StudentSchema.pre('save', function(next: any) {
    if(this.isNew) {
        this['meta'].createdAt = this['meta'].updatedAt = Date.now();
    } else {
        this['meta'].updatedAt = Date.now();
    }
} )

mongoose.model('Student', StudentSchema);