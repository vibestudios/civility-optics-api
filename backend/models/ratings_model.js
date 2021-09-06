import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
    value: {
        type: Number,
        required: true
    }
});

const Ratings = mongoose.model('Ratings', ratingsSchema);
export default Ratings