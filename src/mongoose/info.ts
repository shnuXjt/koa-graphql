import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

const InfoSchema: mongoose.Schema = new schema({
    hobby: [String],
    height: String,
    weight: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

InfoSchema.pre('save', function(next: any) {
    if(this.isNew) {
        this['meta'].createdAt = this['meta'].updatedAt = Date.now();
    } else {
        this['meta'].updatedAt = Date.now();
    }
    next();
})

mongoose.model('Info', InfoSchema);