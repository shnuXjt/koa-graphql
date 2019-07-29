import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InfoSchema: mongoose.Schema = new Schema({
    hobby: [String],
    height: String,
    weight: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

InfoSchema.pre('save', function(next) {
    if(this.isNew) {
        this['meta'].createdAt = this['meta'].updatedAt = Date.now();
    } else {
        this['meta'].updatedAt = Date.now();
    }

    next();
})

mongoose.model('Info', InfoSchema);