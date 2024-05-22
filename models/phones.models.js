import mongoose from "mongoose";

const { Schema, model } = mongoose;

const phonesSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufacture: {
        type: String,
        unique: true,
        required: true
    },
    memory: {
        type: Number,
        required: true
    }
});

export default model('phones', phonesSchema);
