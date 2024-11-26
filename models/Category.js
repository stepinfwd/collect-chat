import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    id: Number,
    name:String,
    items:[],
    createdAt: {
        type: Date,
        default: new Date(),
    },

})

var categoryMessage = mongoose.model('categoryMessage', categorySchema);

export default categoryMessage;